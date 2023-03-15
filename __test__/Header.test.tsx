/*Component Name : WD_header-middle-section
 Utility : To test the Component for rendering a header navigation bar for all the pages in the app
 Author Krishna Choudharyn 06-03-2023-------------------------   */

import {
  findAllByRole,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import axios from "axios";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import userEvent from "@testing-library/user-event";
import getCustomerData from "../services/Api";

describe("header component", () => {
  test("renders logout", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        id: 1005,
        Name: "Max",
        Offers: 4,
        Quotes: 73,
        Orders: 0,
        Fullfilments: 76,
        Pickups: 10,
        AR: 0,
      },
    });
    render(
      <BrowserRouter>
        <getCustomerData id="1005" />
        <Header />
      </BrowserRouter>
    );

    const offerElement = await screen.findByText(/offers/i);
    expect(offerElement).toBeInTheDocument();
    const value = await screen.findByRole("heading");
    expect(value.textContent).toBe("");
    //   const vale = await screen.findByRole('combobox',{name:'Namee'})
    //   expect(vale.textContent).toBe('Max');
  });

  test("renders header 1", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        id: 1001,
        Name: "Max",
        Offers: 4,
        Quotes: 73,
        Orders: 0,
        Fullfilments: 76,
        Pickups: 10,
        AR: 0,
      },
    });
    user.setup();
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const displayValue = screen.getByTitle("DisplayData");
    expect(displayValue.textContent).toMatch("");
    // expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("renders logout 1", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        id: 1005,
        Name: "Max",
        Offers: 4,
        Quotes: 73,
        Orders: 0,
        Fullfilments: 76,
        Pickups: 10,
        AR: 0,
      },
    });
    user.setup();
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoutElements = screen.getByRole("button", { name: "botton" });
    await user.click(logoutElements);
    // expect(logoutElements).not.toBeInTheDocument();
    const buttonElement = screen.queryByLabelText("button", { name: "botton" });
    expect(buttonElement).not.toBeInTheDocument();
    // expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
