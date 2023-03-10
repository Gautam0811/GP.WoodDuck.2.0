// const mockResponse = {
//   getCustomerData: {
//     customerData: [{
//     id:1005, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0
//   }]}
// }


export default {
    get: jest.fn().mockResolvedValue({data:{}})
  };