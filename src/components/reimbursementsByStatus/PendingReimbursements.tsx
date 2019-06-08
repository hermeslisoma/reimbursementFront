import React, { Component } from 'react'
import { connect } from 'react-redux';
import { IStoreState, IReimbursement, ILoginState } from '../../reducers/state.models';
import {Table,Spinner, Button} from 'reactstrap';
import { getReimbursementsByStatus } from '../../actions/reimbursements.actions';
import { RouteComponentProps } from 'react-router-dom';
import ResolveButton from './resolverButton/ResolveButton';


interface MyProps extends RouteComponentProps{
    loginState:ILoginState,
    reimbursementsPendingListState:IReimbursement[],
    getReimbursementsByUser:(id:number)=>void
    
}


class PendingReimbursements extends Component<any,MyProps> {
    componentDidMount(){
        if(this.props.loginState.isAuthenticated){
            let userId:number = this.props.loginState.userId;
            console.log('component did mount::', this.props)
            this.props.getReimbursementsByStatus(1)
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
            if (this.props.reimbursementsPendingListState[0]){
                console.log('ready to print',[...this.props.reimbursementsPendingListState]) 
                list = [...this.props.reimbursementsPendingListState].map((r:IReimbursement)=>
                    (<tr key = {r.reimbursement_id}>
                        <td>{r.author_name}</td>
                        <td>{r.submitted_date && r.submitted_date.substr(0,10)}</td>
                        <td>{r.description}</td>
                        <td>{r.type}</td>
                        <td>{r.amount}</td>
                        <td>{r.status}</td>
                        <td className="d-flex justify-content-around">
                            <ResolveButton reimbursement = {r} action='Approve' statusToChange={2} color = 'success' />
                            <ResolveButton reimbursement = {r} action='Denied' statusToChange={3} color = 'danger' />    
                        </td>
                    </tr>)
                )
            }
        return (
            <div className='mt-5'>
            <h4 className='display-4'>Pending Reimbursements</h4>

            <div className='w-100 d-flex flex-row-reverse my-4'>
            </div>
           <Table striped>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Submitted</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {(this.props.reimbursementsPendingListState[0] && list ) || (<tr><td colSpan={7} className="text-center" ><Spinner color="success" /></td></tr>) 
                    }
                </tbody>
            </Table>
            
        </div>
        )
    }
}
export const mapDispatchProps = {
    getReimbursementsByStatus

}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState:state.loginState,
        reimbursementsPendingListState: state.reimbursementsPendingListState,
        messages:state.messageState

    };
}
export default connect(mapStateToProps,mapDispatchProps)(PendingReimbursements);
 