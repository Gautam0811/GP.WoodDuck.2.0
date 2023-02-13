import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';

import MidBox from './Tabs_Comp/WD_MidBox';



const AntTabs = styled(Tabs)({
  borderBottom: '0px none transparent',
  '& .MuiTabs-indicator': {
    backgroundColor: 'grey',
    display: 'none',
    

  },
});

const AntTab = styled((props) => <Tab disableRipple {...props}  />)(({ theme }) => ({
  
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontSize: 10,
  fontWeight: theme.typography.fontWeightMedium,
  marginRight: theme.spacing(-1),
  minBlockSize:theme.spacing(1),//to decrease block size
  paddingBlock:theme.spacing(1),//to decrease the size of tab block
  color: '#1890ff',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    backgroundColor: '#d1eaff',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 14,
    
    
    
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));



export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<Grid container justifyContent="flex-end" sx={{ mt: -10,pt:10,}}>
{/* //   <Box display="flex" justifyContent="flex-end" sx={{ mt: 6,pt:6,pr:2}}> using flex*/}
    <Box sx={{ width: '27%',height: '80px' }}  >
      <Box sx={{ bgcolor: '#fff',mb:-2}} >
        <AntTabs value={value} onChange={handleChange}  selectionFollowsFocus aria-label="ant example">
          <AntTab icon={<PhoneCallbackRoundedIcon style={{ fontSize: 14 }}/>} iconPosition="start" label="INBOUND" />
          <AntTab icon={<EmailIcon style={{ fontSize: 14 }}/>} iconPosition="start" label="OUTBOUND" />
          <AntTab icon={<GroupsRoundedIcon style={{ fontSize: 14 }}/>} iconPosition="start" label="PRICE LIST" />
        </AntTabs>
        </Box>
      <Box sx={{ bgcolor: '#d1eaff',py: 25,height:'410%'}}>
       
      <Grid><MidBox /></Grid>
      </Box>
      
    </Box></Grid>
     
  );
}