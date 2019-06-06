import React, { Component, SyntheticEvent } from 'react'
import './Login.scss'
import logo from '../../statics/images/logo.webp'
import { connect } from 'react-redux';
import { loginUserAction, updateState } from '../../actions/user.actions';
import classnames from 'classnames'
import { ILoginState, IStoreState } from '../../reducers/state.models';
import { Alert } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

interface MyProps extends RouteComponentProps {
    dispatch: any,
    history:any,
    location: any,
    loginState: ILoginState,
    match: any,
    staticContext:any,
    loginUserAction: (user: object) => any,
    updateState: (error: object) => any
  }
interface MyState {
  error:Object,
  messageFromApi:string
}

class Login extends Component<MyProps, MyState>{
    //state to handle the form validation
    state = {
        error:{
            username : '',
            password : '',
        },
        messageFromApi: ''

      };
    usernameRef:any;
    passwordRef:any;
   
    constructor(props:MyProps) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    componentDidUpdate(){
        if (localStorage.getItem("loginUser")){
            this.props.history.push('/reimbursements')
        }
    }
    componentDidMount(){
        if (localStorage.getItem("loginUser")){
            this.props.history.push('/reimbursements')
        }
    }
    onHandleLogin = (e:SyntheticEvent) => {
        e.preventDefault();
    
        let username = this.usernameRef.value;
        let password = this.passwordRef.value;
        
        if(username === ''){
            this.setState({...this.state,error:{...this.state.error,
                username:'username is required'
            }})
        }
        else if(password === ''){
            this.setState({...this.state,error:{...this.state.error,
                password:'password is required'
            }})
        }else{
            const data = {
                    username, password
            };
           // this.props.updateState()
           this.setState({...this.state,error:{...this.state.error,
               username:'',
               password:''
            }})

            this.props.loginUserAction(data)
            
            
        }
        

        
       
    }
    render(){
        
    return (
        <div className= "login container" >
            <Alert 
                className={classnames("mt-1 no-display ",{'display':this.props.loginState.response.message})}
                color="danger">
                {this.props.loginState.response.message}
            </Alert>
             
                <div className="logincontainer">
                    <div className="center">
                        <div className="imagecontainer">
                        <img className="img-fluid" src={logo} alt=""/>   
                        </div>
                        
                        <form onSubmit={this.onHandleLogin} className='loginForm card p-4'>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="login" 
                                    className={classnames("form-control ",{'is-invalid':this.state.error.username})} 
                                    name="login" 
                                    placeholder="username" 
                                    ref = {(input)=>{this.usernameRef=input}}
                                    />
                                    {this.state.error.username &&
                                        <div className="invalid-feedback">
                                                {this.state.error.username}
                                        </div>
                                    }
                                    
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    id="password" 
                                    className={classnames("form-control ",{'is-invalid':this.state.error.password})}
                                    name="password" 
                                    placeholder="password"
                                    ref = {(input)=>{this.passwordRef=input}}
                                    />
                                    {this.state.error.password &&
                                        <div className="invalid-feedback">
                                                {this.state.error.password}
                                        </div>
                                    }
                            </div>
                            
                            <button  type="submit" className="btn btn-block btn-primary" >Log In</button>
                        </form>
                        
                    </div>
                    
                </div>
                
            </div>
        )
     } n
}
export const mapDispatchToProps = {
    updateState,
    loginUserAction
  };
const mapStateToProps = (state:IStoreState) =>{
    //console.log('this  is the state::' , state);
    return {
        loginState :state.loginState,
        
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);