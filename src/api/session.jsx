export const getUserFromSession = () => {
  if (!getSession()) return {};
  return {
    userId: getSession().userId,
    name: getSession().name,
    company_name: getSession().company_name,
    email: getSession().email,
  };
};

export const getSession = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  return session;
};

export const setSession = (session) => {
  let currentSession = getSession() || {};
  currentSession = { ...currentSession, ...session };
  localStorage.setItem("session", JSON.stringify(currentSession));
};

export const removeSession = () => {
  localStorage.removeItem("session");
};

export const isLoggedIn = () => {
  let sessionData = getSession();
  return sessionData && !!sessionData["token"];
};
