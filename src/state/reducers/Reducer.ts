import { combineReducers } from "redux";
import loginReducer from "./LoginReducer"
import permissionReducer from "./PermissionReducer";


const reducers= combineReducers({
    loginInfo:loginReducer,
    permissionInfo:permissionReducer
   

})
export default reducers;