// WD_Api
// Component Utility : This contains all the APIs used by the project WoodDuck 2.0
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import axios from "axios";

export default function getCustomerData(id) {
  const baseURL = "https://localhost:44351/employee/";

  return axios.get(baseURL + id).then((response) => {
    const customerList = response.data;
    return customerList;
  });
}

export async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
