// data
// Component Utility : This is the data page which has all the data in Json format which is used by all the components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
//This is the data which is used by different components, it is hard coded now but will be replaced by API calls once the 
//backend architecture is confirmed.
//WD_Dashboard data starts
 function UserDetails(id: string, userName: string, isAdmin: boolean, firstName:string,lastName:string, email :string,permissionSet:string) {
  return { id, userName, isAdmin,firstName,lastName, email,permissionSet,key: Math.random() };
}
//The actual implementation will have call to a API.
export const UserInfo = [
  UserDetails("1001", "admin", true,"Admin","Admin","admin@gapac.com", "Admin"),
  UserDetails("1002", "Ananya", false,"Ananya","Dhar", "ananyadhar@gapac.com","Advisor"),
  UserDetails("1003", "Gautam", false,"Gautam","Malhotra","gautammalhotra@gapac.com","Sales Admin"),
  UserDetails("1004", "Abhishek", true,"Abhishek","Bhatt","abhishekbhatt@gapac.com","Admin")

];
