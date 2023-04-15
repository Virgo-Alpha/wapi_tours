import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import { useState } from 'react';

// My pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/ContactUs';
import Search from './Pages/Search';
import Results from './Pages/results';
import CityResults from './Pages/CityResults';

// My layouts
import RootLayout from './layouts/RootLayouts';
// import Nav from './Pages/Home';



function App() {

  const [countrySearch, setCountrysearch] = useState({});
  const [citySearch, setCitysearch] = useState({});
  
  const router = createBrowserRouter(
  
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search setCountrysearch={setCountrysearch} setCitysearch={setCitysearch}/>} />
            <Route path="contacts" element={<Contact />} />
            <Route path="results" element={<Results countrySearch={countrySearch}/>} />
            <Route path="cityresults" element={<CityResults citySearch={citySearch}/>} />
          </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
