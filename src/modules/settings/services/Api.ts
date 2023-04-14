import axios from "axios";

export async function getPermissionSet() {
  const baseURL =
    "https://woodduck-api-silly-bilby-wu.cfapps.us10-001.hana.ondemand.com/api/permissionset";

  return await axios.get(baseURL).then((response) => {
    const permissionset = response.data;
    return permissionset;
  });
}
