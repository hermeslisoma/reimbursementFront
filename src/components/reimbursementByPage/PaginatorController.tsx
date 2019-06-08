import React,{Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { getReimbursementsByPage } from '../../actions/reimbursements.actions';
import { IStoreState, IPagesReimbursements, ILoginState } from '../../reducers/state.models';
import { connect } from 'react-redux';

interface myProps {
    getReimbursementsByPage:(page:number)=>{},
    loginState:ILoginState,
    reimbursmentByPageState:IPagesReimbursements
}
class PaginatorController extends Component <myProps,any>{
    componentDidMount(){
        console.log(this.props.reimbursmentByPageState)
    }
    componentDidUpdate(){
        console.log('new prorp for pagionator:::',this.props.reimbursmentByPageState)
    }
  render() {
    const {pageCount,currentPage} = this.props.reimbursmentByPageState;
    if(!pageCount){
      return (<> no controller</>)
    }else{
      let list = [];

        for(let x=1 ; x<=pageCount;x++){
          list.push(
            
              <PaginationLink key= {x}  onClick={()=>this.props.getReimbursementsByPage(x)}>{x}</PaginationLink>
            
          )
        }
        console.log('this is my list',list)
        return (
          
          <Pagination aria-label="Page navigation example">
             {list}
          </Pagination>
        );
    }
    
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
export default connect(mapStateToProps,mapDispatchToProps)(PaginatorController)