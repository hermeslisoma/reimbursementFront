/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState } from '../../reducers/state.models';
import { addReimbursement } from '../../actions/reimbursements.actions';
import { createReimbursement } from '../../services/models/reimbursements.model';

class AddReimbursement extends Component <any,any>{

    state = {
        modal:false
    }
    amountRef:any;
    descriptionRef:any;
    typeRef:any;

    constructor(props) {
      super(props);
      this.amountRef = React.createRef();
      this.descriptionRef = React.createRef();
      this.typeRef = React.createRef();


    }
  
    toggle = () =>{
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
    clear = ()=>{
      this.amountRef.value='';
      this.descriptionRef.value=''
    }
    submitReimbursement=(e:any)=>{
        e.preventDefault();
        console.log('submit',this.amountRef.value,this.descriptionRef.value,this.typeRef.value);
        let payload:createReimbursement = {
            amount:this.amountRef.value,
            description:this.descriptionRef.value,
            type_id: this.typeRef.value
        }
        this.props.addReimbursement(payload)
        this.clear();
        this.toggle()
        //todo: addreimbursement reducer after call get all reimbursements to update list from reimbursements
        

    }
    render() {
      return (
        <div>
            
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create a Reimbursement</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.submitReimbursement} className=''>
                    <div className="form-group">
                        <input 
                            type="number" 
                            id='amount' 
                            className="form-control"
                            name='amount'
                            placeholder='Insert the amount'
                            required    
                            min= '0'
                            ref = {input=>this.amountRef = input}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='Description' 
                            className="form-control"
                            name='description'
                            placeholder='Please insert a description'
                            required 
                            ref={input=>this.descriptionRef= input}
                    />
                    </div>
                    <div className="form-group">
                        <select 
                            className='form-control'
                            ref={input=>this.typeRef= input}
                                >
                            <option value="1">Lodging</option>
                            <option value="2">Travel</option>
                            <option value="3">Food</option>
                            <option defaultChecked value="4">Otros</option>
                        </select>
                    </div>
                    <Button type='submit' color="primary" >Submit</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
export const mapDispatchProps = {
    addReimbursement

}
const mapStateToProps = (state:IStoreState) =>{
    return {
        reimbursementsListState: state.reimbursementsListState

    };
}
  
export default connect(mapStateToProps,mapDispatchProps)(AddReimbursement);