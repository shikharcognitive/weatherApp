import React from 'react';
import { render , fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import CountryPage from './components/countryPage';
import { BrowserRouter } from "react-router-dom";
import CountryDetails from './components/countryDetails';

// Render App and Home page

test('Render App', () => {
  //verify if UI is ready or not
 const{ getByText,  getByLabelText} = render(<App />);
 getByText('Get Country Details');
 getByLabelText('Enter Country Name');
 getByText('submit');
});


// Render Home Page and verify it's actions

test('fire home page events', async () => {
  const{getByLabelText, getByText } = render(  <BrowserRouter><CountryPage /></BrowserRouter>);
  const countryInput = getByLabelText('Enter Country Name');
  const submitBtn = getByText('submit');

  //check Button is disabled
  expect(submitBtn).toBeDisabled();

  // Change Input field value
  fireEvent.change(countryInput, {target : { value : 'India'}});
  expect(countryInput).toHaveValue('India');

  //check Button is enabled
  expect(submitBtn).toBeEnabled();
  fireEvent.click(submitBtn);
});


test('verify country details page on Ui', () => {
  const wrapper =render(
    <BrowserRouter>
      <CountryDetails/>
    </BrowserRouter>
  );
 
  wrapper.debug();
})

