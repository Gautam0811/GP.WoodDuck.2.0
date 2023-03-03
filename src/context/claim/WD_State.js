import wdContext from "./WD_Context";
import { useState } from "react";

const WDState = (props) => {
  const claimsInitial = []
  const [claims, setClaims] = useState(claimsInitial)

  // Get all claims
  const getClaims = () => {
    const userclaim=[
        {
          username:"admin",
          isAdmin: true,
      },
        {
          username: "Ananya",
          isAdmin: false,
        },
        {
          username: "Gautam",
          isAdmin: false,
        },
        {
            username:"Abhishek",
            isAdmin: false,
          },
      ]
    
    setClaims(userclaim)
  }

  return (
    <wdContext.Provider value={{ claims, getClaims }}>
      {props.children}
    </wdContext.Provider>
  )

}
export default WDState;