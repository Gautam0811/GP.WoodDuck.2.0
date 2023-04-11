import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  GridRowId,
  GridRowModesModel,
  GridRowModes,
} from '@mui/x-data-grid';

interface SelectedRowParams {
  id: GridRowId;
}

interface EditToolbarProps {
  selectedRowParams?: SelectedRowParams;
  rowModesModel: GridRowModesModel;
  setRowModesModel: (value: GridRowModesModel) => void;
  rowMode: "view" | "edit";
}

export function EditPermissions(props: EditToolbarProps) {
  const { selectedRowParams, rowMode, rowModesModel, setRowModesModel } = props;

  const handleSaveOrEdit = () => {
    if (!selectedRowParams) {
      return;
    }
    const { id } = selectedRowParams;
    if (rowMode === "edit") {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    } else {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    }
  };

  const handleCancel = () => {
    if (!selectedRowParams) {
      return;
    }
    const { id } = selectedRowParams;
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };


  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        disabled={!selectedRowParams}
        variant="outlined"
      >
        {rowMode === "edit" ? "Save" : "Edit"}
      </Button>
      <Button
        onClick={handleCancel}
        disabled={rowMode === "view"}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}
