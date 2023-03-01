// WD_Midbox
// Component Utility : The Component created to inbound tabs component on salesgrid
// Author Manas Dixit on 1-3-2023
// -------------------------
import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Grid} from '@mui/material';
import BasicSelect from '../WD_DropdownBox';
import BasicSelectP from '../WD_ProductsDialog';
import BasicSelectL from '../WD_LoadsDialog';
import BasicSelectC from '../WD_CPU';
import LBox from '../WD_LoadComponent';
import CancelIcon from '@mui/icons-material/Cancel';
import FBox from '../WD_Footage';
import QuoteButton from '../../Buttons/WD_QuoteButton';
import NextButton from '../../Buttons/WD_NextButton';
import GetOptionsButton from '../../Buttons/WD_GetOptionsButton';
import CreateTemplate from '../../Buttons/WD_CreateTemplateButton';
import CustomizedSwitches from '../../Buttons/WD_ToggleSwitchButton';
import PlaceOnHoldButton from '../../Buttons/WD_PlaceOnHoldButton';
import SaveNoQuotesButton from '../../Buttons/WD_SaveNoQuotesButton';
import '../../../styles/WD_Tabstyles.css';
import {WD_CPUrows,WD_Templaterows,WD_Buyerrows,WD_Customerrows,WD_Staterows,WD_Shiptorows,WD_Shiptosrows,WD_Buyersgrouprows,WD_MBFrows} from "../../../services/Tab";


export default function MidBox () {
   return( <Grid container className='midbox'>
      
      <div className='topbuttons'>
      <div style={{paddingRight:'10px'}}><QuoteButton/></div>
      <div style={{paddingRight:'20px'}}><NextButton/></div>
      <div><GetOptionsButton/></div>
     </div>
     
     
    
    <Grid sx={{pb:2.5,mt:2,mr:1}}>

    
      <BasicSelect message={"Template"} data={WD_Templaterows}/>
      </Grid>
   <div  className='box' >
   <Grid  > <LBox/></Grid>
   <Grid sx={{pt:5,mt:26,ml:1,}} >
      <BasicSelect message={"BUYER"} data={WD_Buyerrows}/>
      </Grid>
      <Grid sx={{pt:5,mt:2,ml:-2,}} >
      
      <BasicSelect message={"CUSTOMER"} data={WD_Customerrows}/>
      </Grid>
      <Divider sx={{mt:-17}}/>

      <Grid sx={{pt:5,mt:20,ml:-2}} >
   
      <BasicSelect message={"STATE/CITY"} data={WD_Staterows}/>
      </Grid>
      <Grid sx={{pt:5,mt:2,ml:0.5,}} >
      
      <BasicSelect message={"SHIP TO"} data={WD_Shiptorows}/>
      </Grid>
      
      <Divider sx={{mt:-12}}/>

      <Grid sx={{pt:1,mt:1,ml:1,}} >
      
      <BasicSelectP/>
      </Grid><Divider sx={{mt:1}}/>

      <Grid container sx={{pt:0,mt:2,ml:1}} >
      <BasicSelectL/></Grid>
      
      <Grid container sx={{pt:0,mt:-5,ml:18}} >
         <BasicSelectC space={3} message={"TRUCK"} data={WD_CPUrows}/>
      </Grid>
      <Grid  > <FBox space={1.5} data={WD_MBFrows}/></Grid>
   </div>
    <Grid sx={{mt:3,mr:19}}><CreateTemplate/></Grid>
    <Grid sx={{mt:-31,mr:2}}><CustomizedSwitches Text={"Include Reloads"} /></Grid>
    <Grid sx={{mr:24.4,mt:3}}><PlaceOnHoldButton/></Grid>
    <Grid sx={{mt:-3.9}}><SaveNoQuotesButton/></Grid>
    </Grid>
    
   )
}
