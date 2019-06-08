import React, { Component } from 'react';
import { connect } from 'react-redux';
import {IStoreState} from '../../reducers/state.models'
import UserInfoCard from './UserInfoCard';


class UserInfo extends Component<any,any>  {
    componentDidMount(){
        console.log('component did mount::', this.props)
        if(this.props.loginState.isAuthenticated){
            console.log('component did mount::', this.props)
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
        let {user} = this.props.loginState

        console.log(user)
        return (
            <>
                <UserInfoCard user={user}/>
               
            </>
        )
    }
}
const mapStateToProps = (state:IStoreState) =>{
    //console.log('this  is the state::' , state);
    return {
        loginState :state.loginState,
        
    };
}
//@ts-ignore
export default connect(mapStateToProps)(UserInfo)