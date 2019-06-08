import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, match } from 'react-router';
import { ILoginState, IReimbursement, IStoreState, IUserListItem } from '../../reducers/state.models';
import AddReimbursement from '../reimbursementList/AddReimbursement';
import { getReimbursementsByUser } from '../../actions/reimbursements.actions';
import {Table,Spinner} from 'reactstrap';
import UserInfoCard from '../userInfo/UserInfoCard';


interface MyProps extends RouteComponentProps{
    loginState:ILoginState,
    reimbursementsListState:IReimbursement[],
    getReimbursementsByUser:(id:number)=>void,
    userReimbursementStatus:IUserListItem,
    match:match;
}
interface myState{
    username :string,
    firstName:string,
    lastName:string,
    email:string,
    role:string

}
class ReimbursementsByUserID extends Component <MyProps,any> {
    componentDidMount(){
        if(this.props.loginState.isAuthenticated){
            //@ts-ignore
            let userId:number = this.props.match.params.userId;
            console.log('component did mount::', userId)
            this.props.getReimbursementsByUser(userId)
        }else{
            console.log(`i'm not authenticated`)
            localStorage.removeItem('loginUser')
            this.props.history.push('/')
        }
    }
    componentDidUpdate(){
        console.log('esto es updated::',this.props)
    }
render() {
    
            let list:any;
            if (this.props.reimbursementsListState[0]){
                console.log('ready to print',[...this.props.reimbursementsListState]) 
                list = [...this.props.reimbursementsListState].map((r)=>
                    (<tr key = {r.reimbursement_id}>
                        <td>{r.submitted_date && r.submitted_date.substr(0,10)}</td>
                        <td>{r.description}</td>
                        <td>{r.type}</td>
                        <td>{r.amount}</td>
                        <td>{r.status}</td>
                        <td>{r.resolver_name}</td>
                        <td>{r.resolve_date && r.resolve_date.substr(0,10)}</td>
                    </tr>)
                )
                //const {userName,firstName,lastName,email,role} = this.props.reimbursementsListState[0]
            return (
                
                <div className='mt-5'>
                    <h4 className='display-4'> </h4>
    
                    <div className='w-100 d-flex justify-content-center'>
                        <UserInfoCard  user= {this.props.userReimbursementStatus}  />
                    </div>
                   <Table striped>
                        <thead>
                        <tr>
                            <th>Submitted Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Resover Name</th>
                            <th>Resolve Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {(this.props.reimbursementsListState[0] && list ) || (<tr><td colSpan={5} className="text-center" ><Spinner color="success" /></td></tr>) 
                            }
                        </tbody>
                    </Table>
                    
                </div>
            )
            }
            else{
                return(<>No reimbursements for this user</>)
            }
            
    }
}
export const mapDispatchProps = {
    getReimbursementsByUser

}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState:state.loginState,
        reimbursementsPendingListState:state.reimbursementsPendingListState,
        reimbursementsListState: state.reimbursementsListState,
        userReimbursementStatus:state.userReimbursementState

    };
}
export default connect(mapStateToProps,mapDispatchProps)(ReimbursementsByUserID)
