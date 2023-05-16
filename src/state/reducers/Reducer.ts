import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import permissionReducer from './PermissionReducer';
import divisionReducer from './DivisionReducer';

// This is the reducer for combining all the reducers
const reducers = combineReducers({
	loginInfo: loginReducer,
	permissionInfo: permissionReducer,
	divisionInfo: divisionReducer,
});
export default reducers;
