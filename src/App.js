//  import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// My pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/ContactUs';
// import Nav from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/ContactUs" component={Contact} />
        
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
