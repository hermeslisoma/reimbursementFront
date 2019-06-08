import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IUserListItem, IStoreState, ILoginState} from '../../reducers/state.models';
import { updateUserAction } from '../../actions/user.actions';
import { connect } from 'react-redux';


interface myProps{
    updateUserAction:(userId:any,user:any)=>{},
    loginState:ILoginState,
    user:IUserListItem
}
interface myState{
    modal:boolean
}
 class UpdateUser extends Component<myProps,myState>{
    state = {
        modal:false
    }
    usernameRef:any;
    firstnameRef:any;
    lastnameRef:any;
    emailRef:any;
    roleRef:any;
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.firstnameRef= React.createRef();
        this.lastnameRef = React.createRef();
        this.emailRef = React.createRef();
        this.roleRef = React.createRef();
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    updateUser = (e)=>{
        e.preventDefault();
        let userToUpdate:any = {
            userName : this.usernameRef.value,
            firstName:  this.firstnameRef.value,
            lastName: this.lastnameRef.value,
            email: this.emailRef.value,
            role:this.roleRef.value
        }
        this.props.updateUserAction(this.props.user.id,userToUpdate)
        this.toggle();
    }
    render() {
        const 
            {id,
            userName,
            firstName,
            lastName,
            email,
            role} = this.props.user;
        return (
            <>
                <i onClick={this.toggle} className="text-warning fas fa-edit"></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Make changes and save</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.updateUser} className=''>
                   
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id='username' 
                            className="form-control"
                            name='username'
                            placeholder='username'
                            required    
                            min= '2'
                            ref={input=>this.usernameRef= input}
                            defaultValue = {userName}
                            
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                        <input 
                            type="text" 
                            id='firstname' 
                            className="form-control"
                            name='firstname'
                            placeholder='Please insert a firstname'
                            required
                            ref={input=>this.firstnameRef= input}
                            defaultValue = {firstName}
                           
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                        <input 
                            type="text" 
                            id='lastname' 
                            className="form-control"
                            name='lastname'
                            placeholder='Please insert a lastname'
                            required 
                            ref={input=>this.lastnameRef= input}
                            defaultValue = {lastName}
                           
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            id='email' 
                            className="form-control"
                            name='email'
                            placeholder='Please insert a email'
                            required
                            ref={input=>this.emailRef= input} 
                            defaultValue = {email}
                           
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Role:</label>
                        <select 
                            className='form-control'
                            ref={input=>this.roleRef= input}
                            defaultValue = {String(role.id)}  
                                >
                            <option value="1">Admin</option>
                            <option value="2">Finance Manager</option>
                            <option value="3">Employee</option>
                        </select>
                    </div>
                    <Button type='submit' color="primary" >Update</Button>


                </form>
                
            </ModalBody>
          </Modal>
                
            </>
        )
    }
}
export const mapDispatchProps = {
    updateUserAction
}
const mapStateToProps = (state:IStoreState)=>{
    return{
        loginState: state.loginState
    }

}
export default connect(mapStateToProps,mapDispatchProps)(UpdateUser)
