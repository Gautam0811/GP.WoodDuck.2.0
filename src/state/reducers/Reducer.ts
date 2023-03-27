import { combineReducers } from "redux";
import loginreducer from "./Loginreducer";

const reducers= combineReducers({
    loginInfo:loginreducer
   

})
export default reducers;