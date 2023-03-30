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

export const permissionSetData=[
  {
    "PermissionSets" : "Admin",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Assign Division Access":true,
    "Dashboard":true,
    "Managing Default List Views":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "Read-Only",
    "Read-Only Quote":true,
    "Read-Only Order":true,
  },
  {
    "PermissionSets" : "Panel Trader",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Dashboard":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "Senior P Trader",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Assign Division Access":true,
    "Dashboard":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
  },
  {
    "PermissionSets" : "Lumber Trader",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Set/Controls Permissions":true,
    "Dashboard":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "Senior L Trader",
    "Create/Edit Quote" : true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Set/Controls Permissions":true,
    "Dashboard":true,
    "Managing Default List Views":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "Sales Manager/ Sales Director",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Assign Division Access":true,
    "Dashboard":true,
  },
  {
    "PermissionSets" : "IBP",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Assign Division Access":true,
    "Dashboard":true,
    "Managing Default List Views":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "CX Team", 
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Assign Division Access":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "National Accts",
    "Create/Edit Quote" : true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
  },
  {
    "PermissionSets" : "Revenue/Analytics",
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Assign Division Access":true,
    "Dashboard":true,
    "Managing Default List Views":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "VP",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Assign Division Access":true,
    "Dashboard":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "QA Team",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Dashboard":true,
    "Managing Default List Views":true,
    "Managing Integration Mapping Mills to Products":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "Developer",
    "Create/Edit Quote" : true,
    "Create/Edit Order": true,
    "Set Sales Plan": true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Send DCX Info":true,
    "Price Experimentation (Lumber Only)":true
  },
  {
    "PermissionSets" : "Transportation Team",
    "Create/Edit Quote" : true,
    "Manage Sales Grids": true,
    "Read-Only Quote":true,
    "Read-Only Order":true,
    "Manage Tweaker":true,
    "Manage E-Commerce":true,
    "Set/Controls Permissions":true,
    "Assign Division Access":true,
    "Dashboard":true,
    "Managing Default List Views":true,
    "Managing Integration Mapping Mills to Products":true,
  }
]
