import React, { Component } from 'react';
import Paginator from './Paginator';
import ReimbursementPage from './ReimbursementPage';
import { connect } from 'react-redux';
import { IStoreState, ILoginState, IPagesReimbursements } from '../../reducers/state.models';
import { getReimbursementsByPage } from '../../actions/reimbursements.actions';
import { RouteComponentProps } from 'react-router-dom';

interface myProps extends RouteComponentProps{
    getReimbursementsByPage:(page:number)=>{},
    loginState:ILoginState,
    reimbursmentByPageState:IPagesReimbursements
}

class ReimbursementByPage extends Component <myProps,any>{
    componentDidMount(){
        console.log('reimbursement component mount::', this.props)
        if(this.props.loginState.isAuthenticated){
            this.props.getReimbursementsByPage(1);
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
        return (
            <>
                <ReimbursementPage/>

                <Paginator/>
            </>
        )
    }
}
const mapDispatchToProps = {
    getReimbursementsByPage
}

const mapStateToProps= (state:IStoreState)=>{
    return{
        loginState: state.loginState,
        reimbursmentByPageState: state.reimbursmentByPageState

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByPage)