import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store/store";
import { ThemeProvider } from "styled-components";

import theme from "./theme/theme.color";
import App from "./App";

import './index.css';
import reportWebVitals from './reportWebVitals';

// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root')!);

root.render(
<React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
