import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/userList.actions';
import { IStoreState, IUserListItem, ILoginState } from '../../reducers/state.models';
import {Table,Spinner} from 'reactstrap';
import UserRecordWithReimbursement from './UserRecordWithReimbursement';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface Myprops extends RouteComponentProps {
    usersListState:IUserListItem[],
    loginState: ILoginState,
    getAllUsers:()=>{},
    history:History

}

class ReimbursementByUser extends Component<Myprops,any>{
    
    componentDidMount(){
        console.log('reimbursement component mount::', this.props)
        if(this.props.loginState.isAuthenticated){
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
                (<UserRecordWithReimbursement key ={u.id} user={u} history= {this.props.history} />
                )
            )
        }

        return (
            //todo: 
            
            <div className="mt-5" >
                <p className='display-4 mt-5'>Reimbursements by User</p>
               <Table striped>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Reimbursements</th>
                    </tr>
                    </thead>
                    <tbody>
                        {(this.props.usersListState[0] && list ) || (<tr><td colSpan={6} className="text-center" ><Spinner color="success" /></td></tr>) 
                        }
                    </tbody>
                </Table>
                
            </div>
        )
    }
}
export const mapDispatchToProps = {
    getAllUsers,
};
const mapStateToProps = (state:IStoreState) =>{
    return { 
        usersListState:state.usersListState,
        loginState:    state.loginState
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByUser)
