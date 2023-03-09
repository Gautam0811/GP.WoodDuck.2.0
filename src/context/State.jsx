/*Component Name : WDState
 Utility : This Component is responsible to rendering the state in entire project. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

 import Context from "./Context";
 import { useState } from "react";
 
 const State = (props) => {
   const claimsInitial = []
   const [claims, setClaims] = useState(claimsInitial)
 
   // Get all claims
   const getClaims = () => {
     const userclaim= [
       {
         id:"1001",
         username:"admin",
         password:"admin@123",
         isAdmin: true,
     },
       {
         id:"1002",
         username: "Ananya",
         password: "password@123",
         isAdmin: false,
       },
       {
         id:"1003",
         username: "Gautam",
         password: "password@456",
         isAdmin: false,
       },
       {
         id:"1004",
         username:"Abhishek",
         password:"password@789",
         isAdmin: false,
       },
     ]
     
     setClaims(userclaim)
   }
 
   return (
     <Context.Provider value={{ claims, getClaims }}>
       {props.children}
     </Context.Provider>
   )
 
 }
 export default State;