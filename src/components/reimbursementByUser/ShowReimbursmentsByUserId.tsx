import React, { Component } from 'react'
import { History } from 'history';
import {IReimbursmentUserState, IStoreState } from '../../reducers/state.models';
import { connect } from 'react-redux';
import { setReimbursementUser } from '../../actions/reimbursements.actions';

interface myProps {
    user:IReimbursmentUserState
    userId:number,
    history:History
    setReimbursementUser:(user:IReimbursmentUserState)=>{}
}
class ShowReimbursmentsByUserId extends Component <myProps,any>{

redirect = ()=>{
    this.props.setReimbursementUser(this.props.user)
   this.props.history.push(`/reimbursements/${this.props.userId}`)
}
    render() {
        return (
            <>
                <i onClick={this.redirect} className="text-success fas fa-file-invoice-dollar fa-2x"></i>
            </>
        )
    }
}
export const mapDispatchToProps = {
    setReimbursementUser,
};
const mapStateToProps = (state:IStoreState) =>{
    return { 
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowReimbursmentsByUserId)
