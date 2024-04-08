import axios from "axios";

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000/api'
    });
    this.axios.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getUsers = async (authHeaders) => this.axios.get('/users', {headers: authHeaders})
    .then(response => response.data);

  logout = async (authHeaders) => this.axios.delete('/auth/logout', {headers: authHeaders})
    .then(response => response.data);

  login = async (email, password) => this.axios.post('/auth/login', {user: {email, password}});

  signIn = async ({email, firstName, lastName, password, passwordConfirmation}) => this.axios
    .post('/auth/signup', {user: {email, firstName, lastName, password, passwordConfirmation}})
}

export default new Api();