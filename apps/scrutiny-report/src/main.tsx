// Add polyfill for aws-appsync-auth-link compatibility
if (typeof window !== 'undefined' && !window.global) {
  window.global = window;
}

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
