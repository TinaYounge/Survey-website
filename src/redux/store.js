
import { createStore ,applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

import UserReducer from './UserInfo/UserReducer'
import logger from "redux-logger";
import thunk from "redux-thunk";


const  store = createStore(UserReducer,  composeWithDevTools(applyMiddleware(thunk)))


export default store;

store.subscribe(() => console.log(store.getState()))
