import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';

import store from './store/store';
import purchases  from './containers/Purchases';
import base from './containers/HOC/Base';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path={'/'} exact component={base(purchases)} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
