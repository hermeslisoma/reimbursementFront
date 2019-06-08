import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { getReimbursementsByPage } from '../../actions/reimbursements.actions';
import { IStoreState } from '../../reducers/state.models';
import { connect } from 'react-redux';
import RouteComponentProps from 'react-router-dom'

interface myProps extends RouteComponentProps{
    getReimbursementsByPage:(page:number)=>{},
    loginState:ILoginState,
    reimbursmentByPageState:IPagesReimbursements
}
class Paginator extends React.Component {
  render() {
    return (
      <Pagination aria-label="Page navigation example">
      
        <PaginationItem>
          <PaginationLink previous  />
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink next />
        </PaginationItem>
      </Pagination>
    );
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
export default connect(mapStateToProps,mapDispatchToProps)(Paginator)