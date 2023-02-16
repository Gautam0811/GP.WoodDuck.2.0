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
import QuoteButton from "../../Buttons/WD_QuoteButton";
import NextButton from "../../Buttons/WD_NButton";
import GetOptionsButton from "../../Buttons/WD_GetOptionsButton";
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
        <QuoteButton />
      </Grid>
      <Grid>
        <NextButton />
      </Grid>
      <Grid>
        <GetOptionsButton />
      </Grid>

      <Grid sx={{ pb:2.5,mt:2,mr:1 }}>
        <BasicSelect message={"Template"} />
      </Grid>
      <Box
        component='span'
        sx={{ width: 320, height: 860, bgcolor: "#fff", mt: -20 }}
      >
        <Grid>
          <LBox />
        </Grid>
        <Grid sx={{ pt: 5, mt: 26, ml: 0.5 }}>
          <BasicSelect message={"BUYER"} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: -2.5 }}>
          <BasicSelect message={"CUSTOMER"} />
        </Grid>
        <Divider sx={{ mt: -17 }} />

        <Grid sx={{ pt: 5, mt: 20, ml: -1 }}>
          <BasicSelect message={"SHIP TOS"} />
        </Grid>
        <Grid sx={{ pt: 5, mt: 2, ml: 0 }}>
          <BasicSelect message={"SHIP TO"} />
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
            <BasicSelectC />
          </Grid>

          <Grid>
            <FBox />
          </Grid>
        </Grid>
      </Box>

      <Grid sx={{ mt: -69, ml: 18 }}>
        <CustomizedSwitches Text={"Average Freight"}/>
      </Grid>
      

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