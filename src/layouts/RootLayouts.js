import { Link, Outlet } from "react-router-dom";
import '../App.css';

export default function RootLayout() {
  return (
    <div className="App">
    <Nav />
    <header className="App-header">
    <main>
        <Outlet />
    </main>
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
        <li><Link to="about">About Us</Link></li>
        <li><Link to="search">Search</Link></li>
        <li id="right"><Link to="contacts">Contact Us</Link></li>
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
  
