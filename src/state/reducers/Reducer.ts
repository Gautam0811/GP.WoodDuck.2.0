import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import permissionReducer from './PermissionReducer';

// This is the reducer for combining all the reducers
const reducers = combineReducers({
	loginInfo: loginReducer,
	permissionInfo: permissionReducer,
});
export default reducers;
