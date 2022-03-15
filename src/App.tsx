import React, {FC} from 'react';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import CountryDetails from './components/countryDetails';
import CountryPage from './components/countryPage';

const App : FC<any> = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CountryPage/>}/>
      <Route path='/details/:country' element={<CountryDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
