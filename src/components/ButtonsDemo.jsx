import '../App.css';
import {Fragment } from 'react';

import QuoteButton from './buttons/QuoteButton';

import React from 'react'; 
import Divider from "@material-ui/core/Divider";
import GetOptionsButton from './buttons/GetOptionsButton';
import NextButton from './buttons/NextButton';
import SaveNoQuotesButton from './buttons/SaveNoQuotesButton';
import PlaceOnHoldButton from'./buttons/PlaceOnHoldButton';

import SaveButton from './buttons/SaveButton';
import DeleteButton from './buttons/DeleteButton';
import BackButton from './buttons/BackButton';
import AddButton from './buttons/AddButton';
import ImportButton from './buttons/ImportButton';
import CloseButton from './buttons/CloseButton';
import CreateTemplateButton from './buttons/CreateTemplateButton';
import FindButton from './buttons/FindButton';
import ClearAllButton from './buttons/ClearAllButton';
import YesButton from './buttons/YesButton';
import NoButton from './buttons/NoButton';

import CollapseRightButton from './buttons/CollapseRightButton';
import ToggleSwitchButton from './buttons/ToggleSwitchButton';
import SearchButton from './buttons/SearchButton';
import WarningIcon from './buttons/WarningIcon';

import AddContractButton from './buttons/AddContractButton';
import ExitButton from './buttons/ExitButton';
import GetPriceListButton from './buttons/GetPriceListButton';
import OfferButton from './buttons/OFFERbutton';
import ProductButton from './buttons/ProductButton';


function ButtonsDemo() {
  return (
    <Fragment>
      <Divider /> 
      <div style={{ padding:'20px'}}>
      </div>
      <div style={{ display: "flex", flexDirection: "row",}}>
        <GetPriceListButton />
        <GetOptionsButton />
        <SaveNoQuotesButton />
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row",}}>
        
        <FindButton />
        <ClearAllButton />
        <YesButton />
        <NoButton />
        <AddContractButton/>
        <PlaceOnHoldButton />
      </div>
      <Divider />
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <SaveButton />
        <DeleteButton />
        <BackButton />
      </div>
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <AddButton />
        <ImportButton />
        <CloseButton />
        <ExitButton />
      </div>
      <Divider />
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <OfferButton />
        <ProductButton />
        <QuoteButton />
        <NextButton />
        <CreateTemplateButton/>
        <CollapseRightButton/>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row",}}>
        <ToggleSwitchButton />
        <SearchButton />
        <WarningIcon />
      </div>
    </Fragment>
  );
}

export default ButtonsDemo;
