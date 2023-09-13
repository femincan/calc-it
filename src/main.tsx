import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { MantineProviderWithColorScheme } from './components/MantineProviderWithColorScheme';
import App from './App';

import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProviderWithColorScheme>
        <App />
      </MantineProviderWithColorScheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')!,
);
