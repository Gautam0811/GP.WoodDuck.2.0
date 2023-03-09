import { combineReducers } from "redux";
import loginreducer from "./loginreducer";

const reducers= combineReducers({
    amount:loginreducer
   

})
export default reducers;