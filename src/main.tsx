import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import { MantineProviderWithColorScheme } from './components';
import App from './App';

import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProviderWithColorScheme>
        <App />
      </MantineProviderWithColorScheme>
    </Provider>
  </React.StrictMode>,
);
