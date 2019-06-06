import React, { Component } from 'react';
import './App.scss'
import './include/bootstrap'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

//Components
import RegisterPage from './components/registerPage';
import Login from './containers/login/Login';
import UsersList from './components/userList/UsersList';
import Header from './components/header/Header';
import ReimbursementsList from './components/reimbursementList/ReimbursementsList';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import UserInfo from './components/userInfo/UserInfo';


class App extends Component<any,any> {
  componentDidMount(){
    console.log('app mounted')
    console.log('app props:: ',this.props)
  }
  render() {
    const store = configureStore();
    return (
      <Provider store={store} >
          <BrowserRouter>
           <Header />
          <div className="container">
              
              <Switch>
                  <Route exact path="/" component = { Login }/>
                  <Route  path="/reimbursements" component = { ReimbursementsList }/>
                  <Route path= "/myinfo" component = {UserInfo} />
                  <Route  path ="/users" component = {UsersList}/>

                  <Route  path='/register' component={RegisterPage} />
                  <Route path="/" component = { () => <h1>not found</h1> }/>
              </Switch> 
          </div>
             
          </BrowserRouter> 
        
        </Provider>
    
    );
  }
}
export default App