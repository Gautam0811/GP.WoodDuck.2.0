import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import WD_Tabs from "./WD_Tabs";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Stack } from "@mui/material";
// export default function NestedList() {
//   const [open, setOpen] = React.useState(true);
//   const handleClick = () => {
//     setOpen(!open);
//   };
//   return (
//     <Stack
//     direction="row"
//     justifyContent="flex-end"
//     alignContent="flex-end"
//     spacing={-7}   
//     sx={{border:"2px solid red"}}
//     >
      
    
     
//       <Stack  sx={{border:"2px solid red"}}>
//         <Collapse
//           orientation='horizontal'
//           in={open}
//           timeout='auto'
//           unmountOnExit
//         >
//           <WD_Tabs />
//         </Collapse>
//       </Stack>

//       <Stack sx={{border:"2px solid red"}}>
      
//       <ListItemButton onClick={handleClick}>
//         {open ? < NavigateNextIcon/> : <NavigateBeforeIcon/>}
//       </ListItemButton>
     
//     </Stack>
      

      
      
//     </Stack>
//   );
// }

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid container
    
    justifyContent="flex-end"
    
    rowSpacing={8}   
    sx={{display:'flex',flexDirection:'row'}}
    >
     

      <Grid   >
        <Collapse
          orientation='horizontal'
          in={open}
          timeout='auto'
          unmountOnExit
        >
          <WD_Tabs />
        </Collapse>
      </Grid>

      
      <Grid   >
        <ListItemButton onClick={handleClick}>
          {open ? < NavigateNextIcon/> : <NavigateBeforeIcon/>}
        </ListItemButton>
      </Grid>
    </Grid>
  );
}

// import * as React from "react";
// import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
// import Grid from "@mui/material/Grid";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
// import WD_Tabs from "./WD_Tabs";
// import { Stack } from "@mui/material";

// export default function NestedList() {
//   const [open, setOpen] = React.useState(true);
//   const handleClick = () => {
//     setOpen(!open);
//   };
//   return (
//     <Stack
//     direction="row"
//     justifyContent="flex-end"
//     alignItems="center"
//     spacing={-3}
     
//     >
      
//       <Stack>
//         <ListItemButton onClick={handleClick}>
//         {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//       </Stack>
    
//       <Stack>
//         <Collapse
//           orientation='horizontal'
//           in={open}
//           timeout='auto'
//           unmountOnExit
//         >
         
         
           
            
            
             
            
               
              
         
              
           
           
              
               
               
           
//             ABS
             
           
           
          
              
             
               
             
            
           
           
          
         
//         </Collapse>
//       </Stack>
   
//     </Stack>
//   );
// }
