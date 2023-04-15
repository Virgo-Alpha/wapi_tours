import { useState, useEffect } from 'react';

export const GetApiResults2 = ({citySearch}) => {
    console.log(citySearch);
    function LoadResults() {
      // Code for loading results
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2a2ea111b2mshd91e582c07f3e2ap1bc84djsnd1a8bd9d5b22',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
      };
      
      fetch('https://cost-of-living-and-prices.p.rapidapi.com/cities', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    // const [result, setResult] = useState([]);

    // To be adjusted
    const city = citySearch.citySearch.city;
    // const capital = myCountry.capital;
    // const region = myCountry.region;
    // const subregion = myCountry.subregion;
    // const population = myCountry.population;
    //flag
        
    // ! To be uncommented when using the API
    useEffect(() => {LoadResults()});
  
    return (
        <div>
          <p>
          {city}
          </p>
             
        </div>
      
    )
}

export default GetApiResults2;