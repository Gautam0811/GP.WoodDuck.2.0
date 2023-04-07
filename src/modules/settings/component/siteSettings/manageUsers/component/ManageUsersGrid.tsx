import * as React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';


import {OrdersGridcolumns,OrdersGridrows} from "../services/Data";
import { GifBoxTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';

export function ManageUsersGrid(props : any) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });
//alert(String(localStorage.getItem("IsActive")))
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>();
  const [orderFilterGridRow, setOrderFilterGridRow] : any = React.useState({});

  

    React.useEffect(() => {
      setOrderFilterGridRow(OrdersGridrows.filter(a => a.activeUser ===props.isAcitve));
    }, [props.isAcitve]);

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
