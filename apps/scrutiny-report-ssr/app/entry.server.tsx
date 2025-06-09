/**
 * By default, React Router will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://reactrouter.com/explanation/special-files#entryservertsx
 */

import { PassThrough } from 'node:stream';

// Convert node stream to web stream
function createReadableStreamFromReadable(nodeReadable: NodeJS.ReadableStream) {
  return new ReadableStream({
    start(controller) {
      nodeReadable.on('data', (chunk) => {
        controller.enqueue(chunk);
      });
      nodeReadable.on('end', () => {
        controller.close();
      });
      nodeReadable.on('error', (err) => {
        controller.error(err);
      });
    },
  });
}
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import { isbot } from 'isbot';
import type { RenderToPipeableStreamOptions } from 'react-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import routes from './routes';

export const streamTimeout = 5_000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: any,
  loadContext: any
) {
  // Create a static handler for server-side rendering with data loading
  const { query, dataRoutes } = createStaticHandler(routes);
  
  // Execute all loaders for the requested URL
  const queryResult = await query(request);
  
  // If the query returned a response (e.g., a redirect), return it directly
  if (queryResult instanceof Response) {
    return queryResult;
  }
  
  // Create a router that can be used for server rendering
  const router = createStaticRouter(dataRoutes, queryResult);
  
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get('user-agent');

    // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
    // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
    const readyOption: keyof RenderToPipeableStreamOptions =
      (userAgent && isbot(userAgent)) || routerContext.isSpaMode
        ? 'onAllReady'
        : 'onShellReady';

    const { pipe, abort } = renderToPipeableStream(
      <StaticRouterProvider router={router} context={queryResult} />,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    // Abort the rendering stream after the `streamTimeout` so it has time to
    // flush down the rejected boundaries
    setTimeout(abort, streamTimeout + 1000);
  });
}
