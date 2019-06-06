
import axios from 'axios'

import {LoginUser} from './models/loginModel';
import { BaseService } from './baseService';

 export class UserService extends BaseService{

  constructor() {
    super("/users");
  }
GetAllUsers =()=> {
    return axios.get(`${this.url}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }
}
