import { useNavigate } from 'react-router-dom';
import './../App.css';
import { useState } from 'react';



export const Search = ({setCountrysearch}) => {  

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
      if (country !== "") {
        setCountrysearch({country});
        navigate('/results');
      }
      // navigate('/results')
      else if (city !== "") {
        navigate('/cityresults')
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
    </div>
  );
}

export default Search;
