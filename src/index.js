import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persist} from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
        <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
    </Provider>
);

