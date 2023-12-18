import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_app.tsx';
import './index.pcss';
import { BrowserRouter } from 'react-router-dom';
import { MetaMaskProvider } from '@metamask/sdk-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {}
      }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MetaMaskProvider>
  </React.StrictMode>
);
