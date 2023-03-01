// WD_OrdersGrid
// Component Utility : The Component is created to the orders grid on the Orders component
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {WD_OrdersGridrows} from "../../services/data";
import {WD_OrdersGridcolumns} from "../../services/data";

export default function WD_OrdersGrid() {
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        rows={WD_OrdersGridrows}
        columns={WD_OrdersGridcolumns}
        checkboxSelection
      />
    </div>
  );
}
