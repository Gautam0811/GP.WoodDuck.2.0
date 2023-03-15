// WD_CPU
// Component Utility : The Component created to provide data to all the tab components
// Author Manas Dixit on 1-3-2023
// -------------------------

//This is the data which is used by different components, it is hard coded now but will be replaced by API calls once the 
//backend architecture is confirmed.

function CpuCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const CpuRows = [
      CpuCreateData("value 1"),
      CpuCreateData("value 2"),
      CpuCreateData("value 3"),
  ];




  function TemplateCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const TemplateRows = [
    TemplateCreateData("value 1"),
    TemplateCreateData("value 2"),
    TemplateCreateData("value 3"),
  ];



  function BuyerCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const BuyerRows = [
      BuyerCreateData("value 1"),
      BuyerCreateData("value 2"),
      BuyerCreateData("value 3"),
  ];



  function CustomercreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const CustomerRows = [
    CustomercreateData("value 1"),
    CustomercreateData("value 2"),
    CustomercreateData("value 3"),
  ];


  function StateCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const StateRows = [
    StateCreateData("value 1"),
    StateCreateData("value 2"),
    StateCreateData("value 3"),
  ];



  function ShipCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const ShipRows = [
    ShipCreateData("value 1"),
    ShipCreateData("value 2"),
    ShipCreateData("value 3"),
  ];




  function ShipToCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const ShipToRows = [
    ShipToCreateData("value 1"),
    ShipToCreateData("value 2"),
    ShipToCreateData("value 3"),
  ];




  function BuyersGroupCreateData(value) {
    return { value,key: Math.random() };
  }
  //The actual implementation will have call to a API.
  export const BuyersGroupRows = [
    BuyersGroupCreateData("value 1"),
    BuyersGroupCreateData("value 2"),
    BuyersGroupCreateData("value 3"),
  ];



  function MbfCreateData(value) {
    return { value,key: Math.random() };
  }
  
  export const MbfRows = [
    MbfCreateData(0)
  ];


  function MillCreateData(value) {
    return { value,key: Math.random() };
  }
  
  export const MillRows = [
    MillCreateData("ROCKY CREEK"),
    MillCreateData("GP SL WARRENTON ll"),
    MillCreateData("DUDLEY STUD"),
    MillCreateData("PROSPERITY STUD"),
    MillCreateData("THOMSO-R"),
    MillCreateData("CHICAGO-R"),
    MillCreateData("CAMDEN"),
  ];
