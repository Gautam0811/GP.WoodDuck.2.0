/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to store the payload. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/Reducer';

//This is Redux store Implementation for Reducers
export const store = createStore(reducers, {}, applyMiddleware(thunk));
