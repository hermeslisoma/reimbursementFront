import React, { Component } from 'react' ;
import './Header.scss'
import logo from '../../statics/images/logo.webp'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user.actions';
import {Nav,
        NavItem,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        Navbar,
        NavbarBrand,
        NavbarToggler,
        Collapse,
        NavLink
    } from 'reactstrap'
import { IStoreState } from '../../reducers/state.models';



interface MyProps {
    value?:string
    history?:any,
    dispatch:any,
    loginState
}
class Header extends Component<MyProps,any>{
    state = {
        dropdownOpen: false,
        dropdownSettings: false,
        collapsed:true
    }
    componentDidMount(){
        console.log(this.props)
    }
    logout = ()=>{
        this.props.dispatch(logout());
        localStorage.removeItem("loginUser")
        this.props.history.push('/');
    }
    toggle = () => {
            this.setState({
              dropdownOpen: !this.state.dropdownOpen
            });
          }
    toggleSetting = () => {
            this.setState({
                dropdownSettings: !this.state.dropdownSettings
            });
          }   
    toggleNavbar = ()=>{
        this.setState({
            collapsed: !this.state.collapsed
          });
        
    } 
    render(){
        if(!this.props.loginState.isAuthenticated)
        {
            return (
                <Nav  >
                </Nav >
            )
        }
        return ( 
            <div className = "header" >
        <Navbar color="faded" light expand="sm">
          <NavbarBrand to ='/' className="mr-auto"><img className="img-fluid" src={logo} height='50px' width='50px' alt=""/>  </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar >
               <NavItem className="nav-item">
                    <Link to ='' className="nav-link active">Home</Link>
                    {//new reimbursment and below list of reimbursements by id
                    }
                </NavItem>
                {this.props.loginState.rol===1 || this.props.loginState.rol===2 ? 
                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>
                    Reimbursements
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem disabled>By Status</DropdownItem>
                    <DropdownItem><Link to ='/reimbursements/pending' className="nav-link ">Pending</Link></DropdownItem>
                    <DropdownItem>Approved</DropdownItem>
                    <DropdownItem>Denied</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><Link to = "/reimbursements/users"  className="nav-link ">By User</Link></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><Link to = "/all/reimbursements"  className="nav-link ">All</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                    
                    :<></>}
                {this.props.loginState.rol===1 ? <>
                    
                    <NavItem className="nav-item">
                    <Link to ={`/users/`+this.props.loginState.userId} className="nav-link">Users</Link>
                    {//new reimbursment and below list of reimbursements by id
                    }
                </NavItem></>
                    
                    :<></>}
                <NavItem className="nav-item">
                    <Link to ='/myinfo' className="nav-link">My Info</Link>
                    {//new reimbursment and below list of reimbursements by id
                    }
                </NavItem>
                <Dropdown nav isOpen={this.state.dropdownSettings} toggle={this.toggleSetting} inNavbar>
                    <DropdownToggle nav caret>
                    <i className="fas fa-cog"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem><Link to ='/' className="nav-link" onClick={this.logout} >Log out</Link> </DropdownItem>
                    
                    </DropdownMenu>
                </Dropdown>
                
            
        </Nav>
              </Collapse></Navbar>
            </div>
            
        )
                    }
    
}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState:state.loginState
    };
}
export default connect(mapStateToProps)(Header);
