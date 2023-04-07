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
//alert(String(localStorage.getItem("IsActive")))
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([String(localStorage.getItem("IsActive"))]);
    
  const [orderFilterGridRow, setOrderFilterGridRow] : any = React.useState({});


  const val = localStorage.getItem("IsActive");

    React.useEffect(() => {
      console.log(localStorage.getItem("IsActive"));
      setOrderFilterGridRow(OrdersGridrows.filter(a => a.activeUser === Boolean(localStorage.getItem("IsActive"))));
      // OrdersGridrows.filter(a => a.activeUser === Boolean(localStorage.getItem("IsActive")));;
    }, [val]);

  return (
    <Grid className="h-400 w-1000">
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        //{...data}
        rows={orderFilterGridRow}
        columns={OrdersGridcolumns}
      />
    </Grid>
  );
}
