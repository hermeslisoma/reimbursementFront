import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/user.actions';
import { IStoreState, ILoginState, IReimbursement, IMessageState } from '../../reducers/state.models';
import { RouteComponentProps } from 'react-router';
import { getReimbursementsByUser } from '../../actions/reimbursements.actions';
import {Table,Spinner, Button} from 'reactstrap';
import AddReimbursement from './AddReimbursement';

interface MyProps extends RouteComponentProps{
    loginState:ILoginState,
    reimbursementsListState:IReimbursement[],
    messages:IMessageState,
    logout:()=>void,
    getReimbursementsByUser:(id:number)=>void
    
}

class ReimbursementsList extends Component<MyProps, any> {
    componentDidMount(){
        if(this.props.loginState.isAuthenticated){
            let userId:number = this.props.loginState.userId;
            console.log('component did mount::', this.props)
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
            }
            return (
                
            <div className='mt-5'>
                <h4 className='display-4'>My Reimbursements</h4>

                <div className='w-100 d-flex flex-row-reverse my-4'>
                    <AddReimbursement buttonLabel= 'Add Reimbursement' />
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
}
export const mapDispatchProps = {
    logout,
    getReimbursementsByUser

}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState:state.loginState,
        reimbursementsListState: state.reimbursementsListState,
        messages:state.messageState

    };
}
export default connect(mapStateToProps,mapDispatchProps)(ReimbursementsList);