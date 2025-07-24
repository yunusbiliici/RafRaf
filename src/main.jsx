import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={"pk_test_cmVsZXZhbnQtbW9uYXJjaC0zNi5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
