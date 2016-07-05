import React, { PropTypes } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import * as auth from './utils/auth';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import HelpPage from './components/help/HelpPage';
import LoginPage from './components/users/LoginPage.js';
import HelpForm from './components/common/help/HelpForm.js';

const Routes = (props) => {
  const { store } = props;

  const checkAuth = (nextState, replace) => {
    const { user } = store.getState();
    auth.checkAuth(nextState, replace, user.loggedIn);
  };
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={HomePage} />
          <Route path="login" component={LoginPage} />
          <Route>
            <Route path="about" component={AboutPage} onEnter={checkAuth} />
            <Route path="help" component={HelpPage} />
            <Route path="help/new" component={HelpForm} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
