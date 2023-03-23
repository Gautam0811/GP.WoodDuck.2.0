import axios from "axios";

export default function getCustomerData(id: string) {
  const baseURL = "https://localhost:44351/employee/";

  return axios.get(baseURL + id).then((response:any) => {
    const customerList = response.data;
    return customerList;
  });
}