import * as React from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { OrdersGridrows } from "../services/Data";
import { GridRowId, GridRowModesModel } from "@mui/x-data-grid";

interface SelectedRowParams {
  id: GridRowId;
}

export function ViewManageUsers(props: any) {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>();
  const [orderFilterGridRow, setOrderFilterGridRow]: any = React.useState(
    OrdersGridrows.filter(
      (a) =>
        a.activeUser === props.isActive &&
        a.businessLine === props.selectedDivision
    )
  );

  React.useEffect(() => {
    setOrderFilterGridRow(
      OrdersGridrows.filter(
        (a) =>
          a.activeUser === props.isActive &&
          a.businessLine === props.selectedDivision
      )
    );
  }, [props.isActive]);

  const [rows, setRows] = React.useState(OrdersGridrows);
  const [selectedRowParams, setSelectedRowParams] =
    React.useState<SelectedRowParams>();
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const rowMode = React.useMemo(() => {
    if (!selectedRowParams) {
      return "view";
    }
    const { id } = selectedRowParams;
    return rowModesModel[id]?.mode || "view";
  }, [rowModesModel, selectedRowParams]);

  return <div></div>;
}
