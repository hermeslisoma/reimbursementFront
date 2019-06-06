import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import {IStoreState} from '../../reducers/state.models'


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
            <div>
                <Card body outline color="primary" className="mt-5">
                    <CardTitle className= 'lead text-primary'>Name:</CardTitle>
                    <p>{user.firstName} {user.lastName}</p>
                    <CardTitle className= 'lead text-primary'>Email:</CardTitle>
                    <p> {user.email} </p>
                    <CardTitle className= 'lead text-primary'>Role:</CardTitle>
                    <p>{(user.role && user.role.role) || 'role not found'} </p>
                </Card>
               
            </div>
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