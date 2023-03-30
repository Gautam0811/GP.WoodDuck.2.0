function PermissionsSetData(Role: string, EnterEditQuote: boolean, EnterEditOrder: boolean, SetSalesPlan: boolean, ManageSG: boolean, ReadOnlyQuote: boolean, ReadOnlyOrder: boolean, ManageTweaker: boolean, ManageECommerce: boolean, SetControlsPermissions: boolean, AssignDivisionAccess: boolean, Dashboard: boolean, ManagingDefaultListViews: boolean, ManagingIntegrationMappingMills: boolean, SendDcxInfo: boolean, PriceExperimentation: boolean) {
  return { Role, EnterEditQuote, EnterEditOrder, SetSalesPlan, ManageSG, ReadOnlyQuote, ReadOnlyOrder, ManageTweaker, ManageECommerce, SetControlsPermissions, AssignDivisionAccess, Dashboard, ManagingDefaultListViews, ManagingIntegrationMappingMills, SendDcxInfo, PriceExperimentation, key: Math.random() };
}
export const PermissionsData = [
  PermissionsSetData("Admin",true,true,true,true,true,true,true,true,true,true,true,true,true,true,true),
  PermissionsSetData("Read-Only",false,false,false,false,true,true,false,false,false,false,false,false,false,false,false),
  PermissionsSetData("Panel Trader",true,true,false,false,false,false,false,false,false,false,true,false,false,false,false),

];