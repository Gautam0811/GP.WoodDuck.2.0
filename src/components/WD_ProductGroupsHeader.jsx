import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

import WD_SaveButton from '../components/Buttons/WD_SaveButton';
import WD_DeleteButton from '../components/Buttons/WD_DeleteButton';
import WD_BackButton from '../components/Buttons/WD_BackButton';

export default function WD_ProductGroupsHeader() {
  return (
    //for header
    //<div style={{ width:'1000px',  display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', backgroundColor: '#f1f4fb'}}>
    <Box sx={{ flexGrow: 1,display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', backgroundColor: '#f1f4fb' }}>
        <div style={{justifyContent: 'center', paddingLeft: '20px'}}>
            <Typography style={{ fontWeight: 'bold' }}>My Product Groups</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <WD_SaveButton />
            <WD_DeleteButton />
            <WD_BackButton />
        </div>
    </Box>
    
  );
}