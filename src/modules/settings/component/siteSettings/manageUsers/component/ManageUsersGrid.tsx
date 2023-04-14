import * as React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';


import {OrdersGridrows} from "../services/Data";
import { Grid, Typography } from '@mui/material';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { AddManageUsers } from "./AddManageUsers";
import { CloseButton } from "../../../../../../common/button";
import {
  GridColDef,
  GridRowId,
  GridRowModesModel,
  GridRowModes,
  GridRowModel,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { EditManageUsers } from "./EditManageUsers";
import { CheckBox } from "@mui/icons-material";

interface SelectedRowParams {
  id: GridRowId;
}

// export function ManageUsersGrido(props : any) {
  export function ManageUsersGrid(props: any) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });
  // const [rowSelectionModel, setRowSelectionModel] =
  //   React.useState<GridRowSelectionModel>();
  //   const [orderFilterGridRow, setOrderFilterGridRow] : any = React.useState(OrdersGridrows.filter(a => (a.activeUser === props.isActive) && (a.businessLine === props.selectedDivision)));

  //   React.useEffect(() => {
  //     setOrderFilterGridRow(OrdersGridrows.filter(a => (a.activeUser === props.isActive) && (a.businessLine === props.selectedDivision)));

  //   }, [props.isActive]);

  // return (
  //   <Grid className="h-400 w-1000">
  //     <DataGrid
  //       checkboxSelection
  //       onRowSelectionModelChange={(newRowSelectionModel) => {
  //         setRowSelectionModel(newRowSelectionModel);
  //       }}
  //       rowSelectionModel={rowSelectionModel}
  //       //{...data}
  //       rows={orderFilterGridRow}
  //       columns={OrdersGridcolumns}
  //     />

  //   </Grid>
// );
const OrdersGridcolumns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "",
    width: 100,
    cellClassName: "actions",
    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={<CheckBox />}
          label="Save"
          onClick={handleRowSelection(id)}
        />,
      ];
    },
  },
  { field: "businessLine", headerName: "Business Line", type: "string", editable: true, width: 100 },
  { field: "subDivision", headerName: "Sub Division", type: "string", editable: true, width: 100 },
  { field: "firstName", headerName: "First Name", type: "string", editable: true, width: 100 },
  {
    field: "lastName",
    headerName: "LastName",
    align: "center",
    width: 100,
    type: "string",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    align: "center",
    width: 160,
    type: "string",
    editable: true,
  },

  {
    field: "permissionSet",
    headerName: "Permission Set",
    align: "center",
    width: 130,
    type: "string",
    editable: true,
  },
  {
    field: "activeUser",
    headerName: "Active User",
    align: "center",
    width: 100,
    type: "boolean",
    editable: true,
    renderCell(params) {
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
    },
  },
  {
    field: "temporaryPermission",
    headerName: "Temporary Permission",
    align: "center",
    width: 160,
    type: "string",
    editable: true,
  },
  {
    field: "temporaryPermissionDate",
    headerName: "Temporary Permission Date Start/End",
    align: "center",
    width: 200,
    type: "string", 
    editable: true,
  },
];

const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>();
    const [orderFilterGridRow, setOrderFilterGridRow] : any = React.useState(OrdersGridrows.filter(a => (a.activeUser === props.isActive) && (a.businessLine === props.selectedDivision)));

    React.useEffect(() => {
      setOrderFilterGridRow(OrdersGridrows.filter(a => (a.activeUser === props.isActive) && (a.businessLine === props.selectedDivision)));

    }, [props.isActive]);


const [rows, setRows] = React.useState(OrdersGridrows);
  const [selectedRowParams, setSelectedRowParams] =
    React.useState<SelectedRowParams>();
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );


  const handleDelete = () => {
    if (!selectedRowParams) {
      return;
    }
    const { id } = selectedRowParams;
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleRowSelection = (id: GridRowId) => () => {
    setSelectedRowParams({ id });
    console.log(selectedRowParams);
  };

  console.log(rowSelectionModel);
  const onRowsSelectionHandler = (ids: any) => {
    //const Row = ids.map((id:any) => rows.find((row) => row.id === id));
    console.log(ids);
  };

  // const processRowUpdate = (newRow: GridRowModel) => {
  //   const updatedRow = { ...newRow, isNew: false };
  //   // alert(updatedRow);
  //   setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
  //   return updatedRow;
  // };


  const rowMode = React.useMemo(() => {
    if (!selectedRowParams) {
      return "view";
    }
    const { id } = selectedRowParams;
    return rowModesModel[id]?.mode || "view";
  }, [rowModesModel, selectedRowParams]);


  
  return (
    <div>
      <Grid className="settings-header">
      <span className="settings-header-text">Manage Users</span>
        <div className="flexrow">
          <EditManageUsers
            selectedRowParams={selectedRowParams}
            rowMode={rowMode}
            rowModesModel={rowModesModel}
            setRowModesModel={setRowModesModel}
          />
          <Box>
            <LoadingButton
              className="buttontype6"
              onClick={handleDelete}
              disabled={!selectedRowParams}
            >
              <div>
                <div>
                  <DeleteIcon className="icontype1" />
                </div>
                <div>
                  <span>Delete</span>
                </div>
              </div>
            </LoadingButton>
          </Box>
          {/* <AddManageUsers
            setRows={setRows}
            setRowModesModel={setRowModesModel}
          /> */}
          <CloseButton />
        </div>
      </Grid>
      <br />
      <br />
      <div className="h-400 w-1000">
        <DataGrid
          rows={orderFilterGridRow}
          columns={OrdersGridcolumns}
          rowSelectionModel={rowSelectionModel}
          disableRowSelectionOnClick={true}
          rowModesModel={rowModesModel}
          onRowModesModelChange={(model) => setRowModesModel(model)}
          // processRowUpdate={processRowUpdate}
        />
      </div>
    </div>
  );
}
