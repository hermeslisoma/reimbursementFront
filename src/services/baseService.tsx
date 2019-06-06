import axios from 'axios';
import { url } from './apiUrl';
import {LoginUser} from './models/loginModel';

export class BaseService {
  //     http://52.14.165.212:9050/api
  url: string = url;
  constructor(route: string) {
    this.url += route;
  }

  getHeaders()  {
    let login: LoginUser = this.getCurrentLogin();
    const headers: any = {'Content-Type': 'application/json'};
    if (login) headers.Authorization = 'Beared '+login.token;
    return headers;
  }

  getCurrentLogin(): LoginUser {
    let login: LoginUser;
    const data = localStorage.getItem("loginUser");
    if(data)  login = JSON.parse(data)
    //@ts-ignore
    return login;
  }
  
  Get(id:number){
     return axios.get(`${this.url}/${id}`, {headers: this.getHeaders()})
                  .then(resp => {
                    return resp.data;
                  }).catch(error => {
                    return error.response.data
                  });
   }
  GetAll(){
    return axios.get(`${this.url}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }

  Add = (item) =>{
    return axios.post(`${this.url}`,item, {headers: this.getHeaders()})
                .then(resp => {
                    return resp ;
                }).catch(error => {
                    return error.response
                });
  }
  Update = (id:number,user)=>{
    console.log('inside the service update url::',`${this.url}/${id}`,user)
    return axios.patch(`${this.url}/${id}`,user, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
  Delete= (id:number)=>{
    console.log('inside delete:::',`${this.url}/${id}`);
    
    return axios.delete(`${this.url}/${id}`, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
}