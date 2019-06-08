import React, { Component } from 'react'
import { IReimbursement, IStoreState } from '../../../reducers/state.models';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ResolverButton.scss'
import classnames from 'classnames';
import { connect } from 'react-redux';
import { updatePendingReimbursementStatus } from '../../../actions/reimbursements.actions';

interface MyProps {
    reimbursement:IReimbursement,
    action:string,
    statusToChange:number,
    color :string,
    updatePendingReimbursementStatus:(reimbursement:IReimbursement)=>{}
    
}
 class ResolveButton extends Component <MyProps,any>{
    state = {
        modal:false
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    changeState=(e)=>{
        e.preventDefault();
        console.log('im gonna change this reimbursement to::', this.props.statusToChange,
                                                                this.props.action,
                                                                this.props.reimbursement                        
        );
        let newReimbursment:IReimbursement = this.props.reimbursement;
        newReimbursment.status_id= this.props.statusToChange;
        this.props.updatePendingReimbursementStatus(newReimbursment)
        // this.toggle();


      }
    render() {
        const {action} = this.props;

        return (
            <>
                <i onClick={this.toggle} className={classnames("fas",[
                                                    {'fa-thumbs-up':this.props.statusToChange==2},
                                                    {'fa-thumbs-down':this.props.statusToChange==3},
                                                    {'text-success':this.props.color=='success'},
                                                    {'text-danger':this.props.color=='danger'},
                                                    ])}></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
            <ModalHeader className= 'text-primary' toggle={this.toggle}>{action} Reimbursement</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.changeState} className=' p-3'>

                    <div className= 'd-flex justify-content-center mb-2'>
                        <label className='my-3 lead text-center' htmlFor="warning ">Are you sure you want to {this.props.action} this Reimbursement?</label>
                    </div>
                    
                    <br/>
                    <div className='w-100 d-flex justify-content-around'>
                        <Button type='submit' color={action=='Approve'? "success":'warning'} >{action}</Button>
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
    updatePendingReimbursementStatus

}
const mapStateToProps = (state:IStoreState) =>{
    return {

    };
}
export default connect(mapStateToProps,mapDispatchProps)(ResolveButton)
