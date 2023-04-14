// // // // WD_Permissions
// // // // Component Utility : The Component is created to render permissions sets and controls page in Administration settings
// // // // Author Gautam Malhotra on 1-3-2023
// // // // -------------------------

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { PermissionsData ,BindPermissionGrid } from "../../../index";
import { AddPermissions } from "./AddPermissions";
import { CloseButton } from "../../../../../common/button";
import {
  GridColDef,
  DataGrid,
  GridRowId,
  GridRowModesModel,
  GridRowModel,
  GridRowSelectionModel,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { EditPermissions } from "./EditPermissions";
import { CheckBox } from "@mui/icons-material";
import { getPermissionSet } from "../../../services/Api";

interface SelectedRowParams {
  id: GridRowId;
}

export function ViewPermissions() {
  const [rows, setRows] = React.useState(PermissionsData);
  const [permissionRows, setPermissionRows] =React.useState([]);

  const [selectedRowParams, setSelectedRowParams] =
    React.useState<SelectedRowParams>();
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>();
  const [permissions, setPermissions] = React.useState({});

  React.useEffect(()=>{
    getPermissionSet().then((permissionset)=>{
      setPermissions(permissionset);
      setPermissionRows(BindPermissionGrid(permissions));
     
    })
  },[selectedRowParams,permissionRows,permissions]);
  

  const handleDelete = () => {
    if (!selectedRowParams) {
      return;
    }
    const { id } = selectedRowParams;
    setRows(rows.filter((row) => row.id !== id));
  };

  // const handleCellFocus = React.useCallback(
  //   (event: React.FocusEvent<HTMLDivElement>) => {
  //     const row = event.currentTarget.parentElement;
  //     const id = row!.dataset.id!;
  //     setSelectedRowParams({ id });
  //     console.log(selectedRowParams);
  //   },
  //   []
  // );
  const handleRowSelection = (id: GridRowId) => () => {
    setSelectedRowParams({ id });
    console.log(selectedRowParams);
  };
  console.log(rowSelectionModel);

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const rowMode = React.useMemo(() => {
    if (!selectedRowParams) {
      return "view";
    }
    const { id } = selectedRowParams;
    return rowModesModel[id]?.mode || "view";
  }, [rowModesModel, selectedRowParams]);

  
  const columns: GridColDef[] = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      width: 100,
      cellClassName: "actions",
      editable: true,
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

    { field: "Role", headerName: "Role", width: 100, editable: true },
    {
      field: "EnterEditQuote",
      headerName: "Enter Edit Quote",
      width: 100,
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
    },
    {
      field: "EnterEditOrder",
      headerName: "Enter Edit Order",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "SetSalesPlan",
      headerName: "Set Sales Plan",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 160,
    },

    {
      field: "ManageSG",
      headerName: "Manage Sales Grids",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "ReadOnlyQuote",
      headerName: "Read-Only Quote",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "ReadOnlyOrder",
      headerName: "Read-Only Order",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "ManageTweaker",
      headerName: "Manage Tweaker",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "ManageECommerce",
      headerName: "Manage E-Commerce",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "SetControlsPermissions",
      headerName: "Set/Controls Permissions",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "AssignDivisionAccess",
      headerName: "Assign Division Access",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "Dashboard",
      headerName: "Dashboard",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "ManagingDefaultListViews",
      headerName: "Managing Default List Views",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "ManagingIntegrationMappingMills",
      headerName: "Managing Integration Mapping Mills to Products",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "SendDcxInfo",
      headerName: "Send DCX Info",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
    {
      field: "PriceExperimentation",
      headerName: "Price Experimentation (Lumber Only)",
      align: "center",
      type: "boolean",
      editable: true,
      renderCell(params) {
        return params.value ? (
          <CheckIcon color="success"></CheckIcon>
        ) : (
          <div></div>
        );
      },
      width: 100,
    },
  ];

  return (
    <div>
      <Grid className="settings-header">
        <span className="settings-header-text">Manage Permission Sets</span>
        <div className="flexrow">
          <EditPermissions
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
          <AddPermissions
            setRows={setRows}
            setRowModesModel={setRowModesModel}
          />
          <CloseButton />
        </div>
      </Grid>
      <br />
      <br />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={permissionRows}
          columns={columns}
          isRowSelectable={(params) => params.row.Role !== "Admin"}
          rowSelectionModel={rowSelectionModel}
          disableRowSelectionOnClick={true}
          rowModesModel={rowModesModel}
          isCellEditable={(params) => params.row.Role !== "Admin"}
          onRowModesModelChange={(model) => setRowModesModel(model)}
          processRowUpdate={processRowUpdate}
        />
      </div>
    </div>
  );
}
