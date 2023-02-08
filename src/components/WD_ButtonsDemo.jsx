import '../App.css';
import {Fragment } from 'react';

import WD_headerMiddleSection from './WD_header-middle-section';
import WD_LeftSideBar from './WD_LeftSideBar';
import WD_QuoteButton from './Buttons/WD_QuoteButton';

import React from 'react'; 
import Divider from "@material-ui/core/Divider";
import WD_GetOptionsButton from './Buttons/WD_GetOptionsButton';
import WD_NextButton from './Buttons/WD_NButton';
import WD_SaveNoQuotesButton from './Buttons/WD_SaveNoQuotes';
import WD_PlaceOnHoldButton from'./Buttons/WD_PlaceOnHoldButton';

import WD_SaveButton from './Buttons/WD_SaveButton';
import WD_DeleteButton from './Buttons/WD_DeleteButton';
import WD_BackButton from './Buttons/WD_BackButton';
import WD_AddButton from './Buttons/WD_AddButton';
import WD_ImportButton from './Buttons/WD_ImportButton';
import WD_CloseButton from './Buttons/WD_CloseButton';
import WD_CreateTemplateButton from './Buttons/WD_CreateTemplateButton';
import WD_FindButton from './Buttons/WD_FindButton';
import WD_ClearAllButton from './Buttons/WD_ClearAllButton';
import WD_YesButton from './Buttons/WD_YesButton';
import WD_NoButton from './Buttons/WD_NoButton';

import WD_CollapseRightButton from './Buttons/WD_CollapseRightButton';
import WD_ToggleSwitchButton from './Buttons/WD_ToggleSwitchButton';
import WD_SearchButton from './Buttons/WD_SearchButton';
import WD_WarningIcon from './WD_WarningIcon';

function ButtonsDemo() {
  return (
    <Fragment>

      {/* < WD_headerMiddleSection />
      <WD_LeftSideBar />
      <WD_SaveButton /> */}
      {/* <WD_ComponentsList /> */}
      <Divider /> 
      <div style={{ padding:'20px'}}>
      </div>
      <div style={{ display: "flex", flexDirection: "row",}}>
        <WD_QuoteButton />
        <WD_GetOptionsButton />
        <WD_NextButton />
        <WD_SaveNoQuotesButton />
        <WD_PlaceOnHoldButton />
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row",}}>
        <WD_CreateTemplateButton/>
        <WD_FindButton />
        <WD_ClearAllButton />
        <WD_YesButton />
        <WD_NoButton />
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
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row",}}>
        <WD_CollapseRightButton/>
        <WD_ToggleSwitchButton />
        <WD_SearchButton />
        <WD_WarningIcon />
      </div>
      {/* < WD_DemoLeftSideBar1 /> */}
    </Fragment>
  );
}

export default ButtonsDemo;
