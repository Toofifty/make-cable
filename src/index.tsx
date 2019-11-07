import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './register-service-worker';

serviceWorker.register();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
