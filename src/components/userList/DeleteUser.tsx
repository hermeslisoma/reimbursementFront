import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState } from '../../reducers/state.models';
import { deleteUserAction } from '../../actions/user.actions';

 class DeleteUser extends Component <any,any>{
    state = {
        modal:false
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    deleteUser=(e)=>{
        e.preventDefault();
        this.props.deleteUserAction(this.props.id)
        this.toggle();


      }
    render() {
        return (
            <>
                <i onClick={this.toggle} className="ml-auto text-danger fas fa-user-minus"></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Delete user</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.deleteUser} className='card p-5'>

                    <div className= 'd-flex justify-content-center'>
                        <label className='my-3 lead' htmlFor="warning ">Are you sure you want to delete this user?</label>
                    </div>
                    
                    <br/>
                    <div className='w-100 d-flex justify-content-around'>
                        <Button type='submit' color="danger" >Delete</Button>
                        <Button  onClick={this.toggle} color="primary" >Cancel</Button>
                    </div>
                    


                </form>
                
            </ModalBody>
          </Modal>
                
            </>
        )
    }
}
export const mapDispatchProps = {
    deleteUserAction
}
const mapStateToProps = (state:IStoreState)=>{
    return{
        loginState: state.loginState
    }

}
export default connect(mapStateToProps,mapDispatchProps)(DeleteUser)
