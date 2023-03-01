import { findAllByRole, render, screen,waitForElement } from '@testing-library/react';
import axios from "axios";
import WD_headerMiddleSection from '../components/WD_header-middle-section.jsx';

describe('header component', () => {
    test('renders posts if request succeeds', async () => {


axios.get.mockResolvedValueOnce({
    json: async () =>{customerData : [{id:1005, Name:"Max", Offers:4, Quotes: 73,Orders:0,Fullfilments:76, Pickups:10, AR:0} ]}
    });

    render(<WD_headerMiddleSection />);
    // const row = customerData.Offers
    const listItemElements = await findAllByRole(customerData);
    expect(listItemElements).not.toHaveLength(0);
  });
});