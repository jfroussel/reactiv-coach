import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();
