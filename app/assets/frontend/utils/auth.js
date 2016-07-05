export function checkAuth(nextState, replace, loggedIn) {
  if (!loggedIn) {
    replace({ pathname: '/login' });
  }
}
