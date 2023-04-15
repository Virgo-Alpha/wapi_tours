import { useState, useEffect } from 'react';

export const GetApiResults2 = ({city}) => {
    function LoadResults() {
      // Code for loading results
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2a2ea111b2mshd91e582c07f3e2ap1bc84djsnd1a8bd9d5b22',
          'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
      };
      
      fetch('https://country-facts.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(response => 
            // setResult(response)

            console.log(response)
                )
        .catch(err => console.error(err));
    }

    const [result, setResult] = useState([]);
    const [myCity, setMycity] = useState({});

    for (let i = 0; i < result.length; i++) {
      // use if statement to get the country input from the search page
        if (result[i].country === city) {
          setMycity(result[i]);
        }
    }

    // To be adjusted
    // const name = myCountry.name.common;
    // const capital = myCountry.capital;
    // const region = myCountry.region;
    // const subregion = myCountry.subregion;
    // const population = myCountry.population;
    //flag
        

    useEffect(() => {LoadResults()});
  
    return (
        <div>
            {/* {result} */}
            {/* <h1>name: {name}</h1>
            <h2>capital: {capital}</h2>
            <h2>region: {region}</h2>
            <h2>subregion: {subregion}</h2>
            <h2>population: {population}</h2> */}

            
        </div>
      
    )
}

export default GetApiResults2;