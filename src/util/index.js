const getCredentials = () => {
  const token = localStorage.getItem('authToken');
  const user = localStorage.getItem('authUser');
  return { token, user };
};

export default getCredentials;
