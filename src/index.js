import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { FFContextProvider } from '@harnessio/ff-react-client-sdk'

// not a secret
const apiKey = "7cfe2f72-50ab-4ec6-9537-cbfae942063e"
const target = {
  identifier: 'reactApp0',
  name: 'React App Zero',
  attributes: {
     email: 'demo@harness.io',
     location: 'us-central'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FFContextProvider
      apiKey={apiKey}
      target={target}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FFContextProvider>
);
