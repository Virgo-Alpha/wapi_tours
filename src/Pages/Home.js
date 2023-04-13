//  import logo from './logo.svg';
import './../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    // Code for the App
    
    <div className="App">
      <Nav />
      <header className="App-header">
        
        <h1>
          WAPITOURS
        </h1>
        <h2>
          Let us help you explore...
        </h2>
        <button><Link to="/Search">Search</Link></button>
      </header>
      <footer>
      <Footer />
      </footer>
      
    </div>
  );
}

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/AboutUs">About Us</Link></li>
      <li><Link to="/Search">Search</Link></li>
      <li id="right"><Link to="/ContactUs">Contact Us</Link></li>
    </ul>
  )
}

function Footer() {
  return (
    <div className="footer">
      <p>Wapitours &copy; 2023</p>
      <p>Designed by <a href='https://github.com/Virgo-Alpha' target='_blank' rel="noreferrer">Virgo Alpha</a></p>
    </div>
  )
}

export default Home;
