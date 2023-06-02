import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import permissionReducer from './PermissionReducer';
import divisionReducer from './DivisionReducer';
import activeReducer from './ActiveReducer';
import expandedReducer from './ExpandedReducer';

// This is the reducer for combining all the reducers
const reducers = combineReducers({
	loginInfo: loginReducer,
	permissionInfo: permissionReducer,
	divisionInfo: divisionReducer,
	activeInfo: activeReducer,
	expandedInfo: expandedReducer,
});
export default reducers;
