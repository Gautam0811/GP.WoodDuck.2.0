import { combineReducers } from "redux";
import loginreducer from "./Loginreducer";

const reducers= combineReducers({
    amount:loginreducer
   

})
export default reducers;