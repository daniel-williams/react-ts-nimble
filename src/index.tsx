import 'babel-polyfill';
import 'ts-helpers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { default as Home } from './Home';

if (!document.getElementById('root')) {
  document.getElementsByTagName('body').item(0).innerHTML = '<div id="root"></div>';
}

ReactDOM.render(
  <div>
    <h1>Testing React!</h1>
    <Home></Home>
  </div>,
  document.getElementById('root')
);

// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

// import routes from './store/routes';
// import configureStore from './store/configure-store';
// import './styles/index.css';

// declare const __TEST__: boolean;

// const store = configureStore({});
// const history = syncHistoryWithStore(browserHistory, store);

// if (!__TEST__) {
//   ReactDOM.render(
//     <div>
//       <Provider store={ store }>
//         <Router history={ history }>
//           { routes }
//         </Router>
//       </Provider>
//     </div>,
//     document.getElementById('root')
//   );
// }
