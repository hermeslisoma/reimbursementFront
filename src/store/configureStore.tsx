import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas/Start.saga';
import logger from 'redux-logger'

export let store;
//THIS RUNS ONLY ONCE WHE THE COMPONENTS ARE MOUNTED ???
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  //declare a saga middleware for handle the async call to the API

  store = 
    createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware,logger),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );
  //I add a step over here to see how the state of the store is return
  let newStateStore = {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga)
  }
  return newStateStore;
    //root reducer contains all the reducers,
    // aplly middleware declare that the requests has to go trought this middleware
    // and runs the middleware saga
  
};

export default configureStore;