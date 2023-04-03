// // // WD_Permissions
// // // Component Utility : The Component is created to render permissions sets and controls page in Administration settings
// // // Author Gautam Malhotra on 1-3-2023
// // // -------------------------

import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import CheckIcon from "@mui/icons-material/Check";
import { AddPermissions } from './AddPermissions';
import { PermissionsDatacolumns, PermissionsData } from '../../../services/Data';
import {
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridRowParams,
  MuiEvent,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
} from '@mui/x-data-grid';


export function ViewPermissions() {
  console.log(PermissionsData);
  const [rows, setRows] = React.useState(PermissionsData);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  { field: "Role", headerName: "Role", width: 100, editable:true },
  {
    field: "EnterEditQuote",
    headerName: "Enter Edit Quote",
    width: 100,
    type: "boolean",
    editable: true,
    renderCell(params) {
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
    },
  },
  {
    field: "EnterEditOrder",
    headerName: "Enter Edit Order",
    align: "center",
    type: "boolean",
    editable: true,
    renderCell(params) {
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
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
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
    },
    width: 100,
  },
  ];

  return (
    <div className="w100 h-400">
      <AddPermissions setRows={setRows} setRowModesModel={setRowModesModel}/>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
      />
    </div>
  );
}