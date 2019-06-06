import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table,Spinner} from 'reactstrap';
import { IStoreState, ILoginState, IMessageState, IUserListItem } from '../../reducers/state.models';
import { getAllUsers } from '../../actions/userList.actions';
import { clearMessage } from '../../actions/message.action';
import UserRecord from './UserRecord';

interface MyProps {
    value?:string
    history?:any,
    dispatch:any,
    usersListState:IUserListItem[],
    loginState:ILoginState,
    messageState:IMessageState,
    getAllUsers:()=>(any),
    clearMessage:()=>(void)
}

class UsersList extends Component<MyProps,any> {
    
    componentDidMount(){
        console.log('component did mount::', this.props)
        if(this.props.loginState.isAuthenticated){
            console.log('component did mount::', this.props)
            this.props.getAllUsers();
        }else{
            console.log(`i'm not authenticated`)
            localStorage.removeItem('loginUser')
            this.props.history.push('/')
        }
    }
    componentDidUpdate(){
        console.log('component update');
        
        if(this.props.loginState.isAuthenticated){
            console.log('component did mount::', this.props)
        }else{
            console.log(`i'm not authenticated`)
            localStorage.removeItem('loginUser')
            this.props.history.push('/')
        }
    }


render() {
        let list:any;
        if (this.props.usersListState[0]){
            list = [...this.props.usersListState].map((u)=>
                (<UserRecord key ={u.id} user={u} />
                )
            )
        }

        return (
            //todo: 
            <div className="mt-5" >
               <Table striped>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {(this.props.usersListState[0] && list ) || (<tr><td colSpan={5} className="text-center" ><Spinner color="success" /></td></tr>) 
                        }
                    </tbody>
                </Table>
                
            </div>
        )
    }
}

export const mapDispatchToProps = {
    getAllUsers,
    clearMessage,
};
const mapStateToProps = (state:IStoreState) =>{
    return { 
        usersListState:state.usersListState,
        loginState:    state.loginState,
        messageState:   state.messageState,
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersList);
