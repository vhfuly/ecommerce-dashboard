import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';

import base from './containers/HOC/Base';
import store from './store/store';
import Purchases  from './containers/Purchases';
import Purchase  from './containers/Purchase';
import Login from './containers/Login';
import RecoverPassword from './containers/RecoverPassword/RecoverPassword';
import ResetPassword from './containers/RecoverPassword/ResetPassword';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path={'/'} exact component={base(Purchases)} />
          <Route path={'/Purchase/:id'} component={base(Purchase)} />
          <Route path={'/login'} component={Login} />
          <Route path={'/recover-password'} component={RecoverPassword} />
          <Route path={'/reset-password/:token'} component={ResetPassword} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
