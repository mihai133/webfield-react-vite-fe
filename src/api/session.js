export const getSession = () => {
  const session = JSON.parse(localStorage.getItem('session'));
  return session;
}

export const setSession = (session) => {
  localStorage.setItem('session', JSON.stringify(session));
}

export const removeSession = () => {
  localStorage.removeItem('session');
}

export const isLoggedIn = () => {
  const session = getSession();
  return session && session.user;
}