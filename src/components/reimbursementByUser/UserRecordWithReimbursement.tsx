import React, { Component } from 'react'
import { IReimbursmentUserState } from '../../reducers/state.models';
import ShowReimbursmentsByUserId from './ShowReimbursmentsByUserId';
import { History } from 'history';

interface myProps {
    
    user:IReimbursmentUserState
    history:History

}
export default class UserRecordWithReimbursement extends Component<myProps,any> {

    render() {
        const 
            {id,
            userName,
            firstName,
            lastName,
            email,
            role} = this.props.user;
        return (
            <>
                <tr>
                    <td>{userName}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{role.role}</td>
                    <td className='d-flex justify-content-center'><ShowReimbursmentsByUserId user= {this.props.user} userId={id} history={this.props.history} /></td>
                </tr>


            </>
        )
    }
}