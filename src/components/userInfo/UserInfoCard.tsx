import React from 'react';
import { CardTitle } from 'reactstrap';
import { IUserListItem } from '../../reducers/state.models';
import './UserInfoCard.scss'

interface myProps{
    user:IUserListItem
}
const UserInfoCard = (props:myProps) => {
    return (
        <>
            <div color="primary " className="infoCard w-100 mt-5 row">
                <div className="infoItem col">
                    <CardTitle className= 'lead text-primary'>Username:</CardTitle>
                    <p>{props.user.userName}</p>
                </div>
                <div className="infoItem col">
                    <CardTitle className= 'lead text-primary'>Name:</CardTitle>
                    <p>{props.user.firstName} {props.user.lastName}</p>
                </div>
                <div className="infoItem col">
                    <CardTitle className= 'lead text-primary'>Email:</CardTitle>
                    <p> {props.user.email} </p>
                </div>
                <div className="infoItem col">
                    <CardTitle className= 'lead text-primary'>Role:</CardTitle>
                    <p>{(props.user.role && props.user.role.role) || 'role not found'} </p>
                </div>
            </div>
        </>
    )
}

export default UserInfoCard
