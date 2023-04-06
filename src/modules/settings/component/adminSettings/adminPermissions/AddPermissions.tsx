import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
} from '@mui/x-data-grid';
import {
  randomId,
} from '@mui/x-data-grid-generator';

interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
  }
  
export function AddPermissions(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;
  
    const handleClick = () => {
      const id = randomId();
      setRows((oldRows) => [...oldRows, { id, Role:'', isNew: true }]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'Role' },
      }));
    };
  
    return (
      <div>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        <span>ADD</span>
        </Button>
      </div>
    );
  }
  