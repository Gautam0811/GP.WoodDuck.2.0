function PermissionsSetData(Role: string, EnterEditQuote: boolean, EnterEditOrder: boolean, SetSalesPlan: boolean, ManageSG: boolean, ReadOnlyQuote: boolean, ReadOnlyOrder: boolean, ManageTweaker: boolean, ManageECommerce: boolean, SetControlsPermissions: boolean, AssignDivisionAccess: boolean) {
    return { Role, EnterEditQuote, EnterEditOrder, SetSalesPlan, ManageSG, ReadOnlyQuote, ReadOnlyOrder, ManageTweaker, ManageECommerce, SetControlsPermissions, AssignDivisionAccess, key: Math.random() };
  }
  export const PermissionsData = [
    PermissionsSetData("Admin",true,true,true,true,true,true,true,true,true,true),
    PermissionsSetData("Admin",true,true,true,true,true,true,true,true,true,true),
  ];
