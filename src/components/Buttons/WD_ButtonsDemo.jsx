// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import '../../App.css';
import {Fragment } from 'react';

import WD_QuoteButton from './WD_QuoteButton';

import React from 'react'; 
import Divider from "@material-ui/core/Divider";
import WD_GetOptionsButton from './WD_GetOptionsButton';
import WD_NextButton from './WD_NextButton';
import WD_SaveNoQuotesButton from './WD_SaveNoQuotesButton';
import WD_PlaceOnHoldButton from'./WD_PlaceOnHoldButton';

import WD_SaveButton from './WD_SaveButton';
import WD_DeleteButton from './WD_DeleteButton';
import WD_BackButton from './WD_BackButton';
import WD_AddButton from './WD_AddButton';
import WD_ImportButton from './WD_ImportButton';
import WD_CloseButton from './WD_CloseButton';
import WD_CreateTemplateButton from './WD_CreateTemplateButton';
import WD_FindButton from './WD_FindButton';
import WD_ClearAllButton from './WD_ClearAllButton';
import WD_YesButton from './WD_YesButton';
import WD_NoButton from './WD_NoButton';

import WD_CollapseRightButton from './WD_CollapseRightButton';
import WD_ToggleSwitchButton from './WD_ToggleSwitchButton';
import WD_SearchButton from './WD_SearchButton';
import WD_WarningIcon from './WD_WarningIcon';

import WD_AddContractButton from './WD_AddContractButton';
import WD_ExitButton from './WD_ExitButton';
import WD_GetPriceListButton from './WD_GetPriceListButton';
import WD_OfferButton from './WD_OFFERbutton';
import WD_ProductButton from './WD_ProductButton';


function ButtonsDemo() {
  return (
    <Fragment>
      <Divider /> 
      <div style={{ padding:'20px'}}>
      </div>
      <div style={{ display: "flex", flexDirection: "row",}}>
        <WD_GetPriceListButton />
        <WD_GetOptionsButton />
        <WD_SaveNoQuotesButton />
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row",}}>
        
        <WD_FindButton />
        <WD_ClearAllButton />
        <WD_YesButton />
        <WD_NoButton />
        <WD_AddContractButton/>
        <WD_PlaceOnHoldButton />
      </div>
      <Divider />
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <WD_SaveButton />
        <WD_DeleteButton />
        <WD_BackButton />
      </div>
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <WD_AddButton />
        <WD_ImportButton />
        <WD_CloseButton />
        <WD_ExitButton />
      </div>
      <Divider />
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <WD_OfferButton />
        <WD_ProductButton />
        <WD_QuoteButton />
        <WD_NextButton />
        <WD_CreateTemplateButton/>
        <WD_CollapseRightButton/>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row",}}>
        <WD_ToggleSwitchButton />
        <WD_SearchButton />
        <WD_WarningIcon />
      </div>
    </Fragment>
  );
}

export default ButtonsDemo;
