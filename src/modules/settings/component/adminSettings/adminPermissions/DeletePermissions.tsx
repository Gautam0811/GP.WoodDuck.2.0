import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridRowId, GridRowsProp, } from "@mui/x-data-grid";


interface SelectedRowParams {
    id: GridRowId;
  }

interface DeleteProps {
    rows: any;
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    selectedRowParams?: SelectedRowParams;
  }
  
export function DeletePermissions(props: DeleteProps) {

    const { rows, setRows, selectedRowParams } = props;

    const handleDelete = () => {
        if (!selectedRowParams) {
          return;
        }
        const { id } = selectedRowParams;
        setRows(rows.filter((row:any) => row.id !== id));
      };

    return(
        <LoadingButton
              className="buttontype6"
              onClick={handleDelete}
              disabled={!selectedRowParams}
            >
              <div>
                <div>
                  <DeleteIcon className="icontype1" />
                </div>
                <div>
                  <span>Delete</span>
                </div>
              </div>
            </LoadingButton>
    );
}