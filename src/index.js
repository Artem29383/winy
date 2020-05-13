import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { rootSaga } from 'models/index';
import configStore from './store';
import App from './components/App';

/* Get initial state from server side rendering */
const history = createBrowserHistory();
const store = configStore(history);
// Start sagas middleware
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
