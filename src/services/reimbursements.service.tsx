import axios from 'axios'


import { BaseService } from './baseService';
import { IReimbursement } from '../reducers/state.models';

 export class ReimbursementService extends BaseService{

    constructor() {
        super("/reimbursement");
    }

    // get by author
    getReimbursements = (id:number) => {
        console.log(`my urls::: ${this.url}/author/userId/${id}`)
        return axios.get(`${this.url}/author/userId/${id}`, {headers: this.getHeaders()})
                    .then(resp => {
                        console.log('this is the response: ',resp)
                        return resp ;
                    }).catch(error => {
                        return error.response
                    });
    }
    //get by status
    getReimbursementsByStatus = (statusId:number) => {
        console.log(`my urls::: ${this.url}/status/${statusId}`)
        return axios.get(`${this.url}/status/${statusId}`, {headers: this.getHeaders()})
                    .then(resp => {
                        console.log('this is the response: ',resp)
                        return resp ;
                    }).catch(error => {
                        return error.response
                    });
    }
    //update reimbursement by status
    updateReimbursmentStatus =(reimbursement:IReimbursement)=>{
        console.log(`my urls::: ${this.url}`)
        return axios.patch(`${this.url}`,reimbursement, {headers: this.getHeaders()})
                    .then(resp => {
                        console.log('this is the response form update: ',resp)
                        return resp ;
                    }).catch(error => {
                        return error.response
                    });
    }
    getReimbursmentByPage = (page:number)=>{
        let _page = page || 1;
        console.log(`my urls::: ${this.url}`)
        return axios.get(`${this.url}/page?page=${_page}&limit=8`, {headers: this.getHeaders()})
                    .then(resp => {
                        console.log('this is the response form update: ',resp)
                        return resp ;
                    }).catch(error => {
                        return error.response
                    });
    }

}
