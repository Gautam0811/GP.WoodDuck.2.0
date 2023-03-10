/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to store the payload. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */


import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/Reducer";

export const store = createStore(reducers,{},applyMiddleware(thunk))
