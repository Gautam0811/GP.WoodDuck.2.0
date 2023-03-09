import { findAllByRole, render, screen,waitForElement } from '@testing-library/react';
import user from '@testing-library/user-event';
import axios from "axios";
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import WD_headerMiddleSection from '../components/WD_header/WD_header-middle-section';
import userEvent from '@testing-library/user-event';
import getCustomerData from '../services/WD_API'


describe('header component', () => {
    test('renders logout',  async() => {

axios.get.mockResolvedValueOnce({
    data : {id:1005, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0} 
    });

    render(< BrowserRouter>
    <getCustomerData id='1005'/>
    <WD_headerMiddleSection /> 
    </BrowserRouter>);

    const ele =  await screen.findByText(/offers/i);
   
    expect(ele).toBeInTheDocument();
    
    const val = await screen.findByRole('heading',)
    expect(val.textContent).toBe("");
  

  //   const vale = await screen.findByRole('combobox',{name:'Namee'})
  //   expect(vale.textContent).toBe('Max');
    
  });


  test('renders header 1',  async() => {

    
    axios.get.mockResolvedValueOnce({
        data : {id:1001, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0} 
        });
         user.setup()
        render(< BrowserRouter>
        <WD_headerMiddleSection/> 
        </BrowserRouter>
         
        );
        const displayValue = screen.getByTitle("Display1");
          expect(displayValue.textContent).toMatch("");
     
        // expect(axios.get).toHaveBeenCalledTimes(1);
      });

  test('renders logout 1',  async() => {

    
    axios.get.mockResolvedValueOnce({
        data : {id:1005, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0} 
        });
         user.setup()
        render(< BrowserRouter>
        <WD_headerMiddleSection/> 
        </BrowserRouter>);
       
        const logoutElements =    screen.getByRole('button',{name:'bott',});
           await user.click(logoutElements)
        // expect(logoutElements).not.toBeInTheDocument();
    
        const elo = screen.queryByLabelText('button',{name:'bott'});
        expect(elo).not.toBeInTheDocument();
        // expect(axios.get).toHaveBeenCalledTimes(1);
      });
});
