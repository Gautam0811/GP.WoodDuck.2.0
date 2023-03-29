/*Component Name : WDState
 Utility : This Component is responsible to rendering the state in entire project. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

 import React, { useState, createContext } from 'react'

 type ClaimType = {
  id:string,
  username:string,
  password:string,
  isAdmin: boolean,
  subdivision:string,
  firstname: string,
  lastname: string,
}

type ClaimContextType = {
  claims : ClaimType[] | null
  setClaims: React.Dispatch<React.SetStateAction<ClaimType[]>>
  ClaimsData: (claims: ClaimType) => void
}
 
 type ClaimContextProviderProps = {
  children: React.ReactNode
}

export const ClaimContext = createContext({} as ClaimContextType);
export const ClaimContextProvider = ({ children }: ClaimContextProviderProps) => {
   const claimsInitial:ClaimType[] = [{
    id:"1001",
    username:"admin",
    password:"admin@123",
    isAdmin: true,
    subdivision:"",
    firstname: "",
    lastname: "",
    }]
   const [claims, setClaims] = useState<ClaimType[]> (claimsInitial)
   // Get all claims
    const ClaimsData = (claims : ClaimType) => {
  
      setClaims([{
        id:"1001",
        username:"admin",
        password:"admin@123",
        isAdmin: true,
        subdivision: "SL",
        firstname: "admin",
        lastname: "",
        },
        {
        id:"1002",
        username: "Ananya",
        password: "password@123",
        isAdmin: false,
        subdivision:"",
        firstname: "Ananya",
        lastname: "Dhar",
        },
        {
        id:"1003",
        username: "Gautam",
        password: "password@456",
        isAdmin: false,
        subdivision:"",
        firstname: "Gautam",
        lastname: "Malhotra",
        },
        {
        id:"1004",
        username:"Abhishek",
        password:"password@789",
        isAdmin: true,
        subdivision: "SP",
        firstname: "Abhishek",
        lastname: "Bhatt",
      }])
    }

 
   return (
     <ClaimContext.Provider value={{ claims,setClaims, ClaimsData }}>
        {children}
     </ClaimContext.Provider>
   )
 
 }
