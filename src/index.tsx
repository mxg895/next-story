/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme';
import { createStore } from 'redux';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/index';

const store = createStore(
    (state) => state, // TODO: reducer placeholder for reducer; replace this line with the actual reducer once we have it
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
      </ThemeProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
