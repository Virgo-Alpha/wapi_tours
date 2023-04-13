import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
// My pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/ContactUs';
import Search from './Pages/Search';
import Page404 from './Pages/Page404';

// My layouts
import RootLayout from './layouts/RootLayouts';
// import Nav from './Pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="contacts" element={<Contact />} />
          <Route component={<Page404 />} />
        
        </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
