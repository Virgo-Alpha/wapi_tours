//  import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// My pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/ContactUs';
import Search from './Pages/Search';
import Page404 from './Pages/Page404';
// import Nav from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
        <Routes>
          <Route index path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/ContactUs" component={Contact} />
          <Route component={Page404} />
        
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
