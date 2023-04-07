// ManageUserTabs
// Component Utility : The Component is created display the tabs part below header part of the manage users page
// Author Ananya Dhar on 06-04-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton, Tabs, Tab } from "@mui/material";
import {ManageUsersGrid } from './index';
import AppBar from '@mui/material/AppBar';


export function ManageUsersTabs() {

  const [value, setValue] = React.useState(0);
  //const [ActivePassive, setActivePassive] = React.useState(true);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
function setValueActive()
{
    alert(`1`);
    localStorage.setItem("IsActive", "true");
    alert(localStorage.getItem("IsActive"));
}
function setValueInactive()
{
    alert(`2`);
    localStorage.setItem("IsActive", "false");
    alert(localStorage.getItem("IsActive"));
}

  interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
}
 function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
  function a11yProps(index: number) {
    //alert(index);
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
      };
  }
  return (
    //This is the header for Manage Users

    <Box>
      <Grid className="bg-grey-white pl-16 w100 align-items-center">
        <Box>
          {/* <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab value="0" label="Active" {...a11yProps(0)} onChange={setValueActive}></Tab>
            
            <Tab value="1" label="Inactive" {...a11yProps(1)} onChange={setValueInactive}/>
            <Tab value="2" icon={<RefreshIcon />} {...a11yProps(2)}/>
          </Tabs>
          </AppBar> */}
          {/* {value === 0 && <TabPanel>Content for Active</TabPanel>}
          {value === 1 && <TabPanel>Content for Inactive</TabPanel>}
          {value === 2 && <TabPanel>Content for Refresh</TabPanel>} */}
          {/* <TabPanel value={value} index={value}>
            Content for TAB 1
          </TabPanel>
          <TabPanel value={value} index={value}>
            Content for TAB 2
          </TabPanel>
          <TabPanel value={value} index={value}>
            Content for TAB 3
          </TabPanel> */}
          {/* { value === 0 ? <TabPanel value={0} index={0}>1111</TabPanel> : <TabPanel value={1} index={1}>6222</TabPanel>} */}
          {/* {value === 0 && <TabPanel>Content for Active</TabPanel>}
          {value === 1 && <TabPanel>Content for Inactive</TabPanel>}
          {value === 2 && <TabPanel>Content for Refresh</TabPanel>} */}
          {/* {value === 0 && <TabPanel value={value} index={0}><ManageUsersGrid /></TabPanel>} */}
          {/* {value === 1 && <TabPanel value={value} index={1}><ManageUsersGrid /></TabPanel>}
          {value === 2 && <TabPanel value={value} index={2}><ManageUsersGrid /></TabPanel>} */}
        </Box>
      </Grid>
      <Grid className="bg-grey-white pl-16 w100 align-items-center">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Active" {...a11yProps(0)} onClick={setValueActive} />
            <Tab
              label="Inactive"
              {...a11yProps(1)}
              onClick={setValueInactive}
            />
            <Tab icon={<RefreshIcon />} {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Grid>
      <TabPanel value={value} index={0}>
        <ManageUsersGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManageUsersGrid />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RefreshIcon />
      </TabPanel>
    </Box>
  );
}

//another code example

// import React, { useState } from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const rows = [
//     {id: 1, name: 'AD', age: 25, city: "New York" },
//     {id: 2, name: 'AD', age: 25, city: "Ne York" },
//     {id: 3, name: 'AD', age: 25, city: "Nework" }
// ]

// const columns: GridColDef[] = [
//     { field: "id", headerName: 'ID', width: 70},
//     { field: "name", headerName: 'name', width: 70},
//     { field: "age", headerName: 'age', width: 70},
//     { field: "city", headerName: 'city', width: 70},
// ]

// export const ManageUsersTabs = () => {
//     const [filterModel, setFilterModel] =   useState({items: [] });

//     const handleFilterModelChange = (model: any) => {
//         setFilterModel(model);
//     };

//     return (
//         <div style={{ height: 400, width: "100%"}}>
//             <DataGrid 
//                 checkboxSelection
//                 rows={rows}
//                 columns={columns}
//                 // filterModel = {filterModel}
//                 onFilterModelChange={handleFilterModelChange}
//                 />
//         </div>
//     )
// }

//another example

// import React, {useState} from 'react';
// import  {DataGrid , GridToolbar } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';

// const rows = [
//     {id: 1, name: 'AD', age: 25, city: "New York" },
//     {id: 2, name: 'AD', age: 25, city: "Ne York" },
//     {id: 3, name: 'AD', age: 25, city: "Nework" }
// ]

// const columns: GridColDef[] = [
//     { field: "id", headerName: 'ID', width: 70},
//     { field: "name", headerName: 'name', width: 70},
//     { field: "age", headerName: 'age', width: 70},
//     { field: "city", headerName: 'city', width: 70},
// ]

// export function ManageUsersTabs() {
//     const [filteredRows, setFilteredRows] = useState([]);

//     const handleFilter = ( filterValue) => {
//         const filteredData = rows.filter((row) => {
//             return row.city.toLowerCase().includes(filterValue.toLowerCase());
//         });
//         setFilteredRows(filteredData);
//     };

//     return (
//         <div>
//             <DataGrid rows ={filteredRows.length > 0 ? filteredRows : rows}
//             columns={columns}
//             components = {{
//                 Toolbar: GridToolbar,
//             }}
//             componentsProps={{
//                 toolbar: {
//                     filterComponent: (
//                         <FilterComponent onFilter = {handleFilter} />
//                     ),
//                 },
//             }}
//             />
//         </div>
//     );
// };




