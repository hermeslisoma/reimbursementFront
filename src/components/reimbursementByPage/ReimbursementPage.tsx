import React, { Component } from 'react'
import { connect } from 'react-redux';
import { IStoreState, IPagesReimbursements } from '../../reducers/state.models';
import {Table,Spinner} from 'reactstrap';

interface myProps{
    reimbursmentByPageState:IPagesReimbursements;
}


class ReimbursementPage extends Component <myProps,any>{
    
    render() {
        const {reimbursementList} = this.props.reimbursmentByPageState
        if(!reimbursementList[0]){
            return(<Spinner color="success" />)
        }else{

            let list = [...reimbursementList].map((r)=>
            (<tr key = {r.reimbursement_id}>
                <td>{r.author_name}</td>
                <td>{r.submitted_date && r.submitted_date.substr(0,10)}</td>
                <td>{r.description}</td>
                <td>{r.type}</td>
                <td>{r.amount}</td>
                <td>{r.status}</td>
                <td>{r.resolver_name}</td>
                <td>{r.resolve_date && r.resolve_date.substr(0,10)}</td>
            </tr>)
        )

            return (
                <div className='mt-5'>
                    <h4 className='display-4'> </h4>
                   <Table striped>
                        <thead>
                        <tr> 
                            <th>Author</th>
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
                            {(reimbursementList[0] && list ) || (<tr><td colSpan={5} className="text-center" ><Spinner color="success" /></td></tr>) 
                            }
                        </tbody>
                    </Table>
                    
                </div>
            )
        }
       
    }
}
const mapStateToProps= (state:IStoreState)=>{
    return{
        reimbursmentByPageState: state.reimbursmentByPageState}

}
export default connect(mapStateToProps)(ReimbursementPage)
