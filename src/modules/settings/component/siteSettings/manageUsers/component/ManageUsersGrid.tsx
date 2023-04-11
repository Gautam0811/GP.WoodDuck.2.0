import * as React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';


import {OrdersGridcolumns,OrdersGridrows} from "../services/Data";
import { Grid } from '@mui/material';

export function ManageUsersGrid(props : any) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>();
    const [orderFilterGridRow, setOrderFilterGridRow] : any = React.useState(OrdersGridrows.filter(a => (a.activeUser === props.isActive) && (a.businessLine === props.selectedDivision)));

    React.useEffect(() => {
      setOrderFilterGridRow(OrdersGridrows.filter(a => (a.activeUser === props.isActive) && (a.businessLine === props.selectedDivision)));

    }, [props.isActive]);

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
