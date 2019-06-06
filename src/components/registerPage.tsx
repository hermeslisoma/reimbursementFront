import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/user.actions';

interface MyProps {
    
  }
  
  interface MyState {
    value: string
  }
class RegisterPage extends Component<MyProps, MyState> {
    dispatch: any;
    response: any;
    history : any;
    constructor(props:any) {
        super(props);
        this.dispatch = props.dispatch;
        this.response = props.response;
        this.history = props.history;
    }
    
  onHandleRegistration = (e:any) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    const data = {
      name, email, password
    };
    this.dispatch(registerUserAction(data));
  }


  render() {
    let message, isSuccess;
    if (this.response.register.hasOwnProperty('response')) {
      isSuccess = this.response.register.response.success;
      message = this.response.register.response.message;
    }
    return (
      <div>
        <h3>RegisterPage</h3>
        {!isSuccess ? <div>{message}</div> : this.history.push('/')}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='/'>Login here</Link>
      </div>
    )
  }
}

const mapStateToProps = (response:any) => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);