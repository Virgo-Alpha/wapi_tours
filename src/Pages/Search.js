import { useNavigate } from 'react-router-dom';
import './../App.css';
import { useState } from 'react';



export const Search = ({setCountrysearch, setCitysearch}) => {  

  // Form to get the API parameters
  function ThisForm() {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault();
      // alert(`Thank you for your country, ${country}!`);
      setCountry({country});
      setCity({city});
      // setCountrysearch({country});
      
      // navigate('/results')
      if (city !== "") {
        setCitysearch({city});
        setCountrysearch({country});
        navigate('/cityresults')
      }
      else if (country !== "") {
        setCountrysearch({country});
        navigate('/results');
      }
      else {
        alert("Please enter a country OR a city")
        setCountry({});
        setCity({});
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>Search Country:
          <input 
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>

        <br></br>
        <br></br>
        <label>Search City:
          <input 
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
      
        <br></br>
        <br></br>
        <input type="submit" />
      </form>
    )
  }

  return (
    <div className="App-header">
        {/* {result} */}
        <ThisForm />
        <p>
          * Searching by Country only gives, statistics position and country dynamics
        </p>
        <p>
          * Searching by both Country and City gives prices of goods and position of the City on a map
        </p>
    </div>
  );
}

export default Search;
