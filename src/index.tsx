import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import axios from 'axios';

//@ts-ignore
 axios.interceptors.request.use( (req) =>{
    console.log(req);
     return req
    })
// axios.interceptors.response.use( (res) =>{
//     console.log('this is the response::',res);
//     return res
    
// })

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();
