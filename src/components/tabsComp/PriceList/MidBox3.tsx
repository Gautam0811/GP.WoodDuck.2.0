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
import OfferButton from "../../buttons/OFFERbutton";
import NextButton from "../../buttons/NextButton";
import GeTPriceList from "../../buttons/GetPriceListButton";
import CreateTemplate from "../../buttons/CreateTemplateButton";
import CustomizedSwitches from "../../buttons/ToggleSwitchButton";
import PlaceOnHoldButton from "../../buttons/PlaceOnHoldButton";
import SaveNoQuotesButton from "../../buttons/SaveNoQuotesButton";
import BasicTextFields from "../Mill";
import SwitchListSecondary from "../MillList";
import GetPriceListButton from "../../buttons/GetPriceListButton";
import {CpuRows,TemplateRows,BuyersGroupRows,BuyerRows,CustomerRows,StateRows,ShipToRows,MbfRows} from "../../../services/Tab";


export default function MidBox() {
  return (
    <Grid
      container
      className='midbox'
    >
        <div className = 'topbuttons'>
      <div style={{paddingRight:'5px'}}><OfferButton/></div>
      <div style={{paddingRight:'15px'}}><NextButton/></div>
      <div><GetPriceListButton/></div>
     </div>

      <Grid sx={{ pb:2.5,mt:2,mr:1 }}>
        <BasicSelect message={"Template"} data={TemplateRows} />
      </Grid>
      <Box
        component='span'
        sx={{ width: 320, height: 920, bgcolor: "#fff", mt: -20 }}
      >
        <Grid>
          <LBox />
        </Grid>
        <Grid sx={{ pt: 5, mt: 26, ml: 0 ,pr:1}}>
          <BasicSelect message={"BUYER GROUP"} data={BuyersGroupRows} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: -2,pl:2.4 }}>
          <BasicSelect message={"BUYER"} data={BuyerRows} />
        </Grid>
        <Divider sx={{ mt: -17 }} />

        <Grid sx={{ml:3,fontSize:12,fontWeight:"Bold",mt:2}}><p>BUYERS</p></Grid>
        <Divider sx={{ mt: 2}} />

        <Grid sx={{mt:2,ml:3}}><BasicSelectC space={7} message={"MODES"} data={CpuRows}/></Grid>
        <Grid sx={{ pt: 1, mt: 25, ml: -1 }}>
        
          <BasicSelect message={"SHIP TOS"} data={ShipToRows}/>
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: 0 }}>
          <BasicSelect message={"SHIP TO"} data={ShipToRows}/>
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
            <FBox space={3} message={"LINEAL"} data={MbfRows}/>
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
