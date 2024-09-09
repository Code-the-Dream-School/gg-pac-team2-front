const setCredentials = (token, user) => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authUser", user);
  return { token, user };
};

const getCredentials = () => {
  const token = localStorage.getItem("authToken");
  const user = localStorage.getItem("authUser");
  return { token, user };
};

export { getCredentials, setCredentials };
