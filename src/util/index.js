const token = localStorage.getItem('authToken');
const user = localStorage.getItem('authUser');

const credentials = {token:token, user:user}

export default credentials;

