/**
 * By default, React Router will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx react-router reveal` ✨
 * For more information, see https://reactrouter.com/explanation/special-files#entryclienttsx
 */

// Add polyfill for aws-appsync-auth-link compatibility
if (typeof window !== 'undefined' && !window.global) {
  window.global = window;
}

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import routes from './routes';
import { RouterLoading } from './components/RouterLoading';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Create a browser router with the routes configuration
// This enables the browser history API and client-side navigation
const router = createBrowserRouter(routes);

// Make the router available globally for debugging
if (typeof window !== 'undefined') {
  window.__router = router;
}

hydrateRoot(
  rootElement,
  <StrictMode>
    <RouterProvider 
      router={router} 
      fallbackElement={<RouterLoading />}
    />
  </StrictMode>
);

// Add TypeScript declaration for the global router
declare global {
  interface Window {
    __router?: any;
    global: Window;
  }
}
