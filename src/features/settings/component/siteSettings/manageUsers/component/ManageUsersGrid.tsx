import * as React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import {OrdersGridcolumns,OrdersGridrows} from "../services/Data";

export  function ManageUsersGrid() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  return (
    <div style={{ height: 400, width: '100%' }}>
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
    </div>
  );
}
