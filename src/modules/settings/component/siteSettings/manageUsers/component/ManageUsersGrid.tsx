import * as React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';


import {OrdersGridcolumns,OrdersGridrows} from "../services/Data";
import { GifBoxTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';

export function ManageUsersGrid() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

    

  return (
    <Grid className="h-400 w-1000">
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        //{...data}
        rows={OrdersGridrows}
        columns={OrdersGridcolumns}
      />
    </Grid>
  );
}
