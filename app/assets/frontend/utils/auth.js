export function checkAuth(nextState, replace, loggedIn) {
  // check if the path isn't dashboard
  // that way we can apply specific logic
  // to display/render the path we want to

  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(null, nextState.location.pathname);
      } else {
        replace(null, '/');
      }
    } else {
      if (nextState.location.state && nextState.location.pathname) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname },
        });
      } else {
        replace(null, '/');
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname },
        });
      } else {
        replace(null, '/');
      }
    }
  }
}
