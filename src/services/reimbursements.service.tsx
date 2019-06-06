import axios from 'axios'


import { BaseService } from './baseService';

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
}
