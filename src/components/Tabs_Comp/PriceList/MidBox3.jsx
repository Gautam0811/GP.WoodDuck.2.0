// WD_Midbox
// Component Utility : The Component created to price list tabs component on salesgrid
// Author Manas Dixit on 1-3-2023
// -------------------------
import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import BasicSelect from "../DropdownBox";
import BasicSelectP from "../ProductsDialog";
import BasicSelectC from '../CPU';
import LBox from "../LoadComponent";
import CancelIcon from "@mui/icons-material/Cancel";
import FBox from "../Footage";
import OfferButton from "../../Buttons/OFFERbutton";
import NextButton from "../../Buttons/NextButton";
import GeTPriceList from "../../Buttons/GetPriceListButton";
import CreateTemplate from "../../Buttons/CreateTemplateButton";
import CustomizedSwitches from "../../Buttons/ToggleSwitchButton";
import PlaceOnHoldButton from "../../Buttons/PlaceOnHoldButton";
import SaveNoQuotesButton from "../../Buttons/SaveNoQuotesButton";
import BasicTextFields from "../Mill";
import SwitchListSecondary from "../MillList";
import WD_GetPriceListButton from "../../Buttons/GetPriceListButton";
import {WD_CPUrows} from "../../../services/Tab";
import {WD_Templaterows,WD_Buyerrows,WD_Customerrows,WD_Staterows,WD_Shiptorows,WD_Shiptosrows,WD_Buyersgrouprows,WD_MBFrows} from "../../../services/Tab";


export default function MidBox() {
  return (
    <Grid
      container
      className='midbox'
    >
        <div className = 'topbuttons'>
      <div style={{paddingRight:'5px'}}><OfferButton/></div>
      <div style={{paddingRight:'15px'}}><NextButton/></div>
      <div><WD_GetPriceListButton/></div>
     </div>

      <Grid sx={{ pb:2.5,mt:2,mr:1 }}>
        <BasicSelect message={"Template"} data={WD_Templaterows} />
      </Grid>
      <Box
        component='span'
        sx={{ width: 320, height: 920, bgcolor: "#fff", mt: -20 }}
      >
        <Grid>
          <LBox />
        </Grid>
        <Grid sx={{ pt: 5, mt: 26, ml: 0 ,pr:1}}>
          <BasicSelect message={"BUYER GROUP"} data={WD_Buyersgrouprows} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: -2,pl:2.4 }}>
          <BasicSelect message={"BUYER"} data={WD_Buyerrows} />
        </Grid>
        <Divider sx={{ mt: -17 }} />

        <Grid sx={{ml:3,fontSize:12,fontWeight:"Bold",mt:2}}><p>BUYERS</p></Grid>
        <Divider sx={{ mt: 2}} />

        <Grid sx={{mt:2,ml:3}}><BasicSelectC space={7} message={"MODES"} data={WD_CPUrows}/></Grid>
        <Grid sx={{ pt: 1, mt: 25, ml: -1 }}>
        
          <BasicSelect message={"SHIP TOS"} data={WD_Shiptosrows}/>
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: 0 }}>
          <BasicSelect message={"SHIP TO"} data={WD_Shiptorows}/>
        </Grid>
        <Divider sx={{ mt: -17 }} />

        <Grid sx={{ pt: 1, mt: 2, ml: 1 }}>
            <BasicTextFields />
          </Grid>

        <Grid sx={{ mt: 13 }}>
          <Divider sx={{ mt: -12 }} />

          <Grid sx={{ pt: 1, mt: 1, ml: 1 }}>
            <BasicSelectP />
          </Grid>
          <Divider sx={{ mt: 1 }} />



          <Grid>
            <FBox space={3} message={"LINEAL"} data={WD_MBFrows}/>
          </Grid>
        </Grid>
        
      
      </Box>
      

      <Grid sx={{ mt: 3 }}>
        <Grid>
          <CreateTemplate />
        </Grid>

        <Grid sx={{ mr: 21.4, mt: 2 }}>
          <PlaceOnHoldButton />
        </Grid>
        <Grid sx={{ mt: -3.9, ml: 22 }}>
          <SaveNoQuotesButton />
        </Grid>
      </Grid>
      
      
          
    </Grid>
  );
}
