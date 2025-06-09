import {
  Outlet,
} from 'react-router-dom';

type MetaFunction = () => Array<{ title?: string; name?: string; content?: string; property?: string; charSet?: string; httpEquiv?: string; [name: string]: any; }>;
type LinksFunction = () => Array<{ rel: string; href: string; [name: string]: any; }>;

import { AppNav } from './app-nav';

export const meta: MetaFunction = () => [
  {
    title: 'New Nx React Router App',
  },
];

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Nx React Router App</title>
        {/* Add any additional meta tags or links here */}
      </head>
      <body>
        <AppNav />
        {children}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
