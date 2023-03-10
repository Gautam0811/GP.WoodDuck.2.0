import { findAllByRole, render, screen,waitForElement } from '@testing-library/react';
import user from '@testing-library/user-event';
import mockaxios from 'axios';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import WD_headerMiddleSection from '../components/WD_header/WD_header-middle-section';
import userEvent from '@testing-library/user-event';
import getCustomerData from '../services/WD_API'

describe('header component', () => {
    test('renders logout',  async() => {


mockaxios.get.mockResolvedValueOnce({
    data : {id:1005, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0} 
    });

    render(< BrowserRouter>
    <getCustomerData id='1005'/>
    <WD_headerMiddleSection /> 
    </BrowserRouter>);

    const ele =  await screen.findByText(/offers/i);
   
    expect(ele).toBeInTheDocument();
    
    const val = await screen.findByRole('heading',)
    expect(val.textContent).toBe(4);

  //   const vale = await screen.findByRole('combobox',{name:'Namee'})
  //   expect(vale.textContent).toBe('Max');
    
  });


  test('renders logout 1',  async() => {

    
    mockaxios.get.mockResolvedValueOnce({
        data : {id:1005, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0} 
        });
         user.setup()
        render(< BrowserRouter>
        <WD_headerMiddleSection /> 
        </BrowserRouter>);
       
        const logoutElements =    screen.getByRole('button',{name:'bott',});
           await user.click(logoutElements)
        // expect(logoutElements).not.toBeInTheDocument();
    
        const elo = screen.queryByLabelText('button',{name:'bott'});
        expect(elo).not.toBeInTheDocument();
        // expect(axios.get).toHaveBeenCalledTimes(1);
      });
});