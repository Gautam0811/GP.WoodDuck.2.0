/*Component Name : WDState
 Utility : This Component is responsible to rendering the state in entire project. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

 import React, { useState, createContext } from 'react'

 type ClaimType = {
  id:string,
  username:string,
  password:string,
  isAdmin: boolean,
}

type ClaimContextType = {
  claims : ClaimType | null
  setClaims: React.Dispatch<React.SetStateAction<ClaimType | null>>
  ClaimsData: (claims: ClaimType) => void;
}
 
 type ClaimContextProviderProps = {
  children: React.ReactNode
}

export const ClaimContext = createContext({} as ClaimContextType);
export const ClaimContextProvider = ({ children }: ClaimContextProviderProps) => {
   const claimsInitial = [{
    id:"1001",
    username:"admin",
    password:"admin@123",
    isAdmin: true,
    }]
   const [claims, setClaims] = useState<ClaimType | null > (null)
   // Get all claims
    const ClaimsData = (claims : ClaimType) => {
  
      setClaims([{
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
        isAdmin: true,
      }])
    }

 
   return (
     <ClaimContext.Provider value={{ claims,setClaims, ClaimsData }}>
        {children}
     </ClaimContext.Provider>
   )
 
 }
