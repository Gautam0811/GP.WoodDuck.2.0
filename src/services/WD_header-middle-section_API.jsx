import axios from "axios";
import * as React from "react";

export default function getCustomerData(id) {
  const baseURL = "https://localhost:44351/employee/";

  return axios.get(baseURL + id).then((response) => {
    const customerList = response.data;
    return customerList;
  });
}
