import React, { Component } from 'react'
import { IUserListItem } from '../../reducers/state.models';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

interface myProps{
    user:IUserListItem

}
export default class UserRecord extends Component<any,myProps> {

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
                    <td className='d-flex'><UpdateUser user={this.props.user}/><DeleteUser className= "ml-auto" id = {id}/></td>
                </tr>


            </>
        )
    }
}

