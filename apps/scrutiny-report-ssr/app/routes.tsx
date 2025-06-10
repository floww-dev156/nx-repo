import { type RouteObject } from 'react-router-dom';
import { Layout } from './root';
import { App } from './app';
import { AboutComponent } from './routes/about';

// Loading spinner component
export function LoadingSpinner(): JSX.Element {
  return <div className="loading-spinner">Loading...</div>;
}

// Error boundary component
export function ErrorBoundary({ error }: { error: Error }): JSX.Element {
  return (
    <div className="error-boundary">
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Type definitions for loader data
export interface HomeLoaderData {
  message: string;
}

export interface AboutLoaderData {
  message: string;
}

// Loader functions for routes - removed artificial delay
export async function homeLoader() {
  return { message: 'Welcome to the home page!(18.3)' };
}

export async function aboutLoader() {
  return { message: 'This is the about page!(18.3)' };
}

// Routes configuration with loaders and error boundaries
// Using Layout component to provide proper HTML structure for SSR
export const routes: RouteObject[] = [
  {
    // Root route with Layout as the element
    // @ts-ignore - Bypassing type checking for React Router compatibility
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    path: '/',
    // @ts-ignore - Bypassing type checking for React Router compatibility
    errorElement: (
      <Layout>
        <ErrorBoundary error={new Error('Page error')} />
      </Layout>
    ),
    loader: homeLoader,
    index: true,
  },
  {
    path: '/about',
    // @ts-ignore - Bypassing type checking for React Router compatibility
    element: (
      <Layout>
        <AboutComponent />
      </Layout>
    ),
    // @ts-ignore - Bypassing type checking for React Router compatibility
    errorElement: (
      <Layout>
        <ErrorBoundary error={new Error('About page error')} />
      </Layout>
    ),
    loader: aboutLoader,
  },
];

export default routes;
