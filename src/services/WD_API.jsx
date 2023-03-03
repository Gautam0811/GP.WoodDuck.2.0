import axios from "axios";
import * as React from "react";

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
