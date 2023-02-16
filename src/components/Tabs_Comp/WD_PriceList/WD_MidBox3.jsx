import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import BasicSelect from "./WD_InsideBoxes";
import BasicSelectP from "./WD_ProductsDialog";
import BasicSelectL from "./WD_LoadsDialog";
import BasicSelectC from "./WD_CPU";
import LBox from "./WD_LoadComponent";
import CancelIcon from "@mui/icons-material/Cancel";
import FBox from "./WD_Footage";
import OFFERbutton from "../../Buttons/WD_OFFERbutton";
import NextButton from "../../Buttons/WD_NButton";
import GeTPriceList from "../../Buttons/WD_GetPriceList";
import CreateTemplate from "../../Buttons/WD_CreateTemplateButton";
import CustomizedSwitches from "../../Buttons/WD_ToggleSwitchButton";
import PlaceOnHoldButton from "../../Buttons/WD_PlaceOnHoldButton";
import SaveNoQuotesButton from "../../Buttons/WD_SaveNoQuotes";
import BasicTextFields from "./WD_Mill";
import SwitchListSecondary from "./WD_MillList";
export default function MidBox() {
  return (
    <Grid
      container
      justifyContent='flex-end'
      size='small'
      sx={{ mt: 0, pt: 1, pr: 0.5, mb: -25 }}
    >
      <Grid>
        <OFFERbutton />
      </Grid>
      <Grid>
        <NextButton />
      </Grid>
      <Grid>
        <GeTPriceList />
      </Grid>

      <Grid sx={{ pb:2.5,mt:2,mr:1 }}>
        <BasicSelect message={"Template"} />
      </Grid>
      <Box
        component='span'
        sx={{ width: 320, height: 940, bgcolor: "#fff", mt: -20 }}
      >
        <Grid>
          <LBox />
        </Grid>
        <Grid sx={{ pt: 5, mt: 26, ml: 0 ,pr:1}}>
          <BasicSelect message={"BUYER GROUP"} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: -2,pl:2.4 }}>
          <BasicSelect message={"BUYER"} />
        </Grid>
        <Divider sx={{ mt: -17 }} />

        <Grid sx={{ml:3,fontSize:12,fontWeight:"Bold",mt:2}}><p>BUYERS</p></Grid>
        <Divider sx={{ mt: 2}} />

        <Grid sx={{ pt: 5, mt: 31, ml: -1 }}>
          <BasicSelect message={"SHIP TOS"} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: 0 }}>
          <BasicSelect message={"SHIP TO"} />
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
            <FBox />
          </Grid>
        </Grid>
        
        <Grid container sx={{ pt: 0, mt: -82, ml: 2 }}>
            <BasicSelectC />
          </Grid>
        
      </Box>
      

      <Grid sx={{ mt: 0 }}>
        <Grid>
          <CreateTemplate />
        </Grid>

        <Grid sx={{ mr: 21.4, mb: 1.8 }}>
          <PlaceOnHoldButton />
        </Grid>
        <Grid sx={{ mt: -7.8, ml: 22 }}>
          <SaveNoQuotesButton />
        </Grid>
      </Grid>
      
      
          
    </Grid>
  );
}
