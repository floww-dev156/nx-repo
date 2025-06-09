import { type RouteObject } from 'react-router-dom';
import { Layout } from './root';
import App from './app';
import AboutComponent from './routes/about';
import './styles/loading.css';

// Helper function to create a delay for simulating data loading
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Loading spinner component for in-page loading states
export function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

// Error boundary component
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Loader function for the home page
export async function homeLoader() {
  await delay(2000);
  return { message: 'Welcome to the home page!' };
}

// Loader function for the about page
export async function aboutLoader() {
  await delay(2000);
  return { message: 'This is the about page!' };
}

// Routes configuration with loaders and error boundaries
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout>
              <App />
            </Layout>,
    errorElement: <Layout><ErrorBoundary error={new Error('Page error')} /></Layout>,
    loader: homeLoader,
    // Adding a shouldRevalidate function to force revalidation on navigation
    shouldRevalidate: () => true,
    index: true
  },
  {
    path: '/about',
    element: <Layout>
              <AboutComponent />
            </Layout>,
    errorElement: <Layout><ErrorBoundary error={new Error('About page error')} /></Layout>,
    loader: aboutLoader,
    // Adding a shouldRevalidate function to force revalidation on navigation
    shouldRevalidate: () => true
  }
];

export default routes;
