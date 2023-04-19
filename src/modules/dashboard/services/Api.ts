import axios from "axios";


//This is the API call to pull Market Segment data from the backend 
export async function getMarketSegment() {
  const baseURL:string=String(process.env.REACT_APP_DASHBOARD_MARKET_SEGMENT);
  console.log("baseURL :"+baseURL);

  return await axios.get(baseURL).then((response) => {
    const marketsegment = response.data;
    return marketsegment;
  });
}


//This is the API call to pull Mills data from the backend 
export async function getMillsData() {
    const baseURL:string=String(process.env.REACT_APP_DASHBOARD_MILLS_DATA);
    console.log("baseURL :"+baseURL);
  
    return await axios.get(baseURL).then((response) => {
      const millsdata = response.data;
      return millsdata;
    });
}


//This is the API call to pull Market data from the backend 
export async function getMarketData() {
    const baseURL:string= String(process.env.REACT_APP_DASHBOARD_MARKET_DATA);
    console.log("baseURL :"+baseURL);
  
    return await axios.get(baseURL).then((response) => {
      const marketdata = response.data;
      return marketdata;
    });
}


//This is the API call to pull Sales data from the backend 
export async function getSalesData() {
  const baseURL:string=String(process.env.REACT_APP_DASHBOARD_SALES_DATA);
  console.log("baseURL :"+baseURL);

  return await axios.get(baseURL).then((response) => {
    const salesdata = response.data;
    return salesdata;
  });
}
