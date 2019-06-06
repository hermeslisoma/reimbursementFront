
import axios from 'axios'

import {LoginUser} from './models/loginModel';
import { BaseService } from './baseService';

 export class AuthenticationService extends BaseService{

  constructor() {
    super("");
  }

  setCurrentLogin(login: LoginUser) {
    localStorage.setItem("loginUser", JSON.stringify(login));
  }

  authenticated(): boolean {
    let login: LoginUser = this.getCurrentLogin();
    return !!login && !!login.token;
  }

Authenticate = (user: string, pwd: string) => {
    localStorage.removeItem('loginUser');
    return axios.post(this.url + '/login', { "username": user, "password": pwd })
    .then(resp => {
      this.setCurrentLogin(resp.data)
      return resp.data;
    }).catch(error => {
      throw error
    });
  }
}
