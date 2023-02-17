import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#e3f2fd",
    color: "#42a5f5"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const columns = [
  { id: "orderId", label: "Order ID" },
  { id: "mill", label: "Mill" },
  {
    id: "salesperson",
    label: "Salesperson",
    align: "right",
  },
  {
    id: "customer",
    label: "Customer",
    align: "right",
  },
  {
    id: "buyer",
    label: "Buyer",
    align: "right",
  },
  {
    id: "customerPo",
    label: "Customer PO",
    align: "right",
  },
  {
    id: "mode",
    label: "Mode",
    align: "right",
  },
  {
    id: "ordered",
    label: "Ordered",
    align: "right",
  },
  {
    id: "promised",
    label: "Promised",
    align: "right",
  },
  {
    id: "scheduled",
    label: "Scheduled",
    align: "right",
  },
  {
    id: "readied",
    label: "Readied",
    align: "right",
  },
];

function createData(
  orderId,
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
    orderId,
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
    465135803,
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
    465135802,
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
    365135805,
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
    265135808,
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
    665135809,
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
    965135802,
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
    865135801,
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
    765135801,
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
    265135500,
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
    165135604,
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
    665135704,
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
