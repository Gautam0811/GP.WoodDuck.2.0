// WD_CPU
// Component Utility : The Component created to provide all the tab components
// Author Manas Dixit on 1-3-2023
// -------------------------





import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import EmailIcon from '@mui/icons-material/Email';
import MidBox from './Inbound/MidBox';
import MidBox2 from './Outbound/MidBox2';
import MidBox3 from './PriceList/MidBox3';
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import "../../styles/WD_StyleMain.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{bgcolor: '#d1eaff',py: 30,height:'410%'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  return (
  <div className='groo'>
    
   
    <Box sx={{  width: '30%' ,height: '80px'}}>
    
      <Box sx={{ bgcolor: '#fff',mb:-2 }}>
        <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <AntTab icon={<PhoneCallbackRoundedIcon style={{ fontSize: 14 }}/>} iconPosition="start" label="INBOUND" {...a11yProps(0)} />
          <AntTab icon={<EmailIcon style={{ fontSize: 14 }}/>} iconPosition="start" label="OUTBOUND"  {...a11yProps(1)} />
          <AntTab icon={<GroupsRoundedIcon style={{ fontSize: 14 }}/>} iconPosition="start" label="PRICE LIST" {...a11yProps(2)} />
        </AntTabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid><MidBox /></Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid><MidBox2/></Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid><MidBox3/></Grid>
      </TabPanel>
    </Box>
    
    </div>
    
  );
}