/*Component Name : WDContext
 Utility : This Component is responsible to initialize the context. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

 import { createContext } from "react";

 type Claims = {
    id:string,
    username:string,
    password:string,
    isAdmin: boolean,
  }
  
  type ClaimContextType = {
    claims : Claims | null
    setClaims: React.Dispatch<React.SetStateAction<Claims | null>>
  }
  
  
  

 const wdContext = createContext({} as ClaimContextType);
 
 export default wdContext;