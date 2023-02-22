import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Order ID", width: 130 },
  { field: "mill", headerName: "Mill", width: 130 },
  {
    field: "salesperson",
    headerName: "Salesperson",
    align: "center",
    width: 130,
  },
  {
    field: "customer",
    headerName: "Customer",
    align: "center",
    width: 130,
  },
  {
    field: "buyer",
    headerName: "Buyer",
    align: "center",
    width: 130,
  },
  {
    field: "customerPo",
    headerName: "Customer PO",
    align: "center",
    width: 130,
  },
  {
    field: "mode",
    headerName: "Mode",
    align: "center",
    width: 130,
  },
  {
    field: "ordered",
    headerName: "Ordered",
    align: "center",
    width: 130,
  },
  {
    field: "promised",
    headerName: "Promised",
    align: "center",
    width: 130,
  },
  {
    field: "scheduled",
    headerName: "Scheduled",
    align: "center",
    width: 130,
  },
  {
    field: "readied",
    headerName: "Readied",
    align: "center",
    width: 130,
  },
];

function createData(
  id,
  mill,
  salesperson,
  customer,
  buyer,
  customerPo,
  mode,
  ordered,
  promised,
  scheduled,
  readied
) {
  return {
    id,
    mill,
    salesperson,
    customer,
    buyer,
    customerPo,
    mode,
    ordered,
    promised,
    scheduled,
    readied,
  };
}

const rows = [
  createData(
    465135804,
    "Talladega",
    "MPU",
    "Barnett Co.",
    "Jess Abell",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135805,
    "Piedmont-R",
    "NOA",
    "Sunbelt Forest Products",
    "Mark Jennings",
    "040",
    "T",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135806,
    "Piedmont-R",
    "NOA",
    "Sunbelt Forest Products",
    "Mark Jennings",
    "039",
    "T",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135807,
    "Piedmont-R",
    "NOA",
    "Sunbelt Forest Products",
    "Mark Jennings",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135808,
    "Talladega",
    "MPU",
    "Barnett Co.",
    "Mark Jennings",
    "038",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135809,
    "Piedmont-R",
    "MPU",
    "Barnett Co.",
    "Jess Abell",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135810,
    "Talladega",
    "NOA",
    "Sunbelt Forest Products",
    "Jess Abell",
    "TBD",
    "T",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135811,
    "Piedmont-R",
    "MPU",
    "Sunbelt Forest Products",
    "Jess Abell",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135812,
    "Talladega",
    "MPU",
    "Barnett Co.",
    "Mark Jennings",
    "037",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135813,
    "Piedmont-R",
    "NOA",
    "Barnett Co.",
    "Jess Abell",
    "TBD",
    "T",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135814,
    "Talladega",
    "MPU",
    "Sunbelt Forest Products",
    "Jess Abell",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135815,
    "Piedmont-R",
    "MPU",
    "Barnett Co.",
    "Jess Abell",
    "036",
    "T",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135816,
    "Talladega",
    "NOA",
    "Sunbelt Forest Products",
    "Jess Abell",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135817,
    "Piedmont-R",
    "MPU",
    "Barnett Co.",
    "Mark Jennings",
    "TBD",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
  createData(
    465135818,
    "Talladega",
    "NOA",
    "Barnett Co.",
    "Jess Abell",
    "035",
    "C",
    "02/14/2023",
    "Due in 0 day",
    "02/15/2023",
    "02/14/2023"
  ),
];

export default function WD_OrdersGrid() {
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
