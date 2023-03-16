// WD_Midbox
// Component Utility : The Component created to outbound tabs component on salesgrid
// Author Manas Dixit on 1-3-2023
// -------------------------
import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import BasicSelect from "../DropdownBox";
import BasicSelectP from "../ProductsDialog";
import BasicSelectL from "../LoadsDialog";
import BasicSelectC from '../Cpu';
import LBox from "../LoadComponent";
import CancelIcon from "@mui/icons-material/Cancel";
import FBox from "../Footage";
import QuoteButton from "../../buttons/QuoteButton";
import NextButton from "../../buttons/NextButton";
import GetOptionsButton from "../../buttons/GetOptionsButton";
import CreateTemplate from "../../buttons/CreateTemplateButton";
import CustomizedSwitches from "../../buttons/ToggleSwitchButton";
import PlaceOnHoldButton from "../../buttons/PlaceOnHoldButton";
import SaveNoQuotesButton from "../../buttons/SaveNoQuotesButton";
import BasicTextFields from "../Mill";
import SwitchListSecondary from "../MillList";
import {CpuRows,TemplateRows,BuyerRows,CustomerRows,StateRows,ShipToRows,MbfRows} from "../../../services/Tab";


export default function MidBox() {
  return (
    <Grid
      container
      className='midbox'
    >
      <div className = 'topbuttons'>
      <div style={{paddingRight:'10px'}}><QuoteButton/></div>
      <div style={{paddingRight:'20px'}}><NextButton/></div>
      <div><GetOptionsButton/></div>
     </div>

      <Grid sx={{ pb:2.5,mt:2,mr:1 }}>
        <BasicSelect message={"Template"} data={TemplateRows}/>
      </Grid>
      <Box
        component='span'
        sx={{ width: 320, height: 860, bgcolor: "#fff", mt: -20 }}
      >
        <Grid>
          <LBox />
        </Grid>
        <Grid sx={{ pt: 5, mt: 26, ml: 0.5 }}>
          <BasicSelect message={"BUYER"} data={BuyerRows} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: -2.5 }}>
          <BasicSelect message={"CUSTOMER"} data={CustomerRows}/>
        </Grid>
        <Divider sx={{ mt: -17 }} />

        <Grid sx={{ pt: 5, mt: 20, ml: -1 }}>
          <BasicSelect message={"SHIP TOS"} data={ShipToRows}/>
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: 0 }}>
          <BasicSelect message={"SHIP TO"} data={ShipToRows}/>
          <Grid sx={{  ml: 19,pt:4 }}><CustomizedSwitches  Text={"Average Freight"}/></Grid>
        </Grid>

       
        <Divider sx={{ mt: -11 }} />

        <Grid sx={{ pt: 1, mt: 1, ml: 1 }}>
            <BasicTextFields />
          </Grid>

        <Grid sx={{ mt: 9 }}>
          <Divider sx={{ mt: -12 }} />

          <Grid sx={{ pt: 1, mt: 1, ml: 1 }}>
            <BasicSelectP />
          </Grid>
          <Divider sx={{ mt: 1 }} />

          <Grid container sx={{ pt: 0, mt: 2, ml: 1 }}>
            <BasicSelectL />
          </Grid>

          <Grid container sx={{ pt: 0, mt: -5, ml: 18 }}>
            <BasicSelectC space={3} message={"TRUCK"} data={CpuRows}/>
          </Grid>

          <Grid >
            <FBox space={3} message={"LINEAL"} data={MbfRows} />
          </Grid>
        </Grid>
      </Box>
      

      <Grid sx={{ mt: 3 }}>
        <Grid>
          <CreateTemplate />
        </Grid>

        <Grid sx={{ mr: 21.4, mt:2 }}>
          <PlaceOnHoldButton />
        </Grid>
        <Grid sx={{ mt: -3.9, ml: 22 }}>
          <SaveNoQuotesButton />
        </Grid>
      </Grid>
    </Grid>
  );
}
