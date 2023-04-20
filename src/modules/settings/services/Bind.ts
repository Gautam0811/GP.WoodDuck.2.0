
const permissionSet = [
  "Customer.Create",
  "EnterEditOrder",
  "Customer.Get",
  "ManageSG",
  "ReadOnlyQuote",
  "ReadOnlyOrder",
  "Customer.Find",
  "Customer.Update",
  "create.order",
  "create.quote",
  "Customer.Delete",
  "manage.quote",
  "Administration.PermissionSet.Get",
  "Administration.PermissionSet.Find",
  "BusinessModel"
];
function PermissionsSetData(
  Id: string,
  Role: string,
  EnterEditQuote: boolean,
  EnterEditOrder: boolean,
  SetSalesPlan: boolean,
  ManageSG: boolean,
  ReadOnlyQuote: boolean,
  ReadOnlyOrder: boolean,
  ManageTweaker: boolean,
  ManageECommerce: boolean,
  SetControlsPermissions: boolean,
  AssignDivisionAccess: boolean,
  Dashboard: boolean,
  ManagingDefaultListViews: boolean,
  ManagingIntegrationMappingMills: boolean,
  SendDcxInfo: boolean,
  PriceExperimentation: boolean
) {
  return {
    Id,
    Role,
    EnterEditQuote,
    EnterEditOrder,
    SetSalesPlan,
    ManageSG,
    ReadOnlyQuote,
    ReadOnlyOrder,
    ManageTweaker,
    ManageECommerce,
    SetControlsPermissions,
    AssignDivisionAccess,
    Dashboard,
    ManagingDefaultListViews,
    ManagingIntegrationMappingMills,
    SendDcxInfo,
    PriceExperimentation,
  };
}


export function BindPermissionGrid(props: any) {
    const jsonPermissionSet: any = [];
    props.map((apiData: any) => {
    const permissionRole: any = [];
    const permission: any = [];
    permissionRole.push(apiData.permissionSetId);
    permissionRole.push(apiData.permissionSetName);

    apiData.availablePermissions.map((permissionRow: any) => {
      permission.push(permissionRow);
    });
    const arrayPermissionValue = permissionSet.map((value) =>
      permission.includes(value)
    );
    arrayPermissionValue.map((mapperPermission: any) => {
      permissionRole.push(mapperPermission);
    });

    jsonPermissionSet.push(PermissionsSetData.apply(null, permissionRole));
  });
  return jsonPermissionSet;
}


