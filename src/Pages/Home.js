import './../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className="App-header">
        <h1>
          WAPITOURS
        </h1>
        <h2>
          Let us help you explore...
        </h2>
        <button id='searchButton'><Link to="search">Search</Link></button>
    </div>
  );
}

export default Home;
