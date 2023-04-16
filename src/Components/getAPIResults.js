import { useState, useEffect } from 'react';

export const GetApiResults = ({countrySearch}) => {
    console.log(countrySearch);
    async function LoadResults() {
        // Code for loading results
      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '246cd2dec5mshc1b2610eaacef98p145c70jsne9917d190919',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
      };
      
      await fetch('https://country-facts.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(response => {
            //setResult(response[0].name.common);
            for (let i = 0; i < response.length; i++) {
                if (response[i]['name']['common'] === countrySearch.country) {
                    setResult(response[i]);
                    console.log(response[i]);
                }
            }}
            // console.log(response)
                )
        .catch(err => console.error(err));
    }
    

    const [result, setResult] = useState([]);

    // To be used instead of the API when testing
    // const setter = () =>  {
    //     setResult(
    //         {
    //             // "name": {"countryName": "Kenya"},
    //             "capital": 'Nairobi',
    //             "region": "Africa",
    //             "subregion": "Eastern Africa",
    //             "population": 53771296,
    //             "flag": "https://res.cloudinary.com/dt5gwt7vu/image/upload/v1633148961/flags/ken.svg"
    //         });
    
    // }

    const countryName = countrySearch.country;

    // for(let i = 0; i < country.length; i++) {
    //     countryName.push(country[i]);
    // }
    
    // const countryName = country; // Set to name user inputs
    const capital = result.capital;
    const region = result.region;
    const subregion = result.subregion;
    const population = result.population;
    const flag = result.flag;

    // ! To be uncommented when using the API
    useEffect(() => {
        LoadResults();
    }, []);
  
    return (
        <div>
            {/* {result} */}
            <p>
                Country's Name:
                {countryName}
                <br></br>
                <br></br>
                <img src={flag} alt="flag" />
            </p>
            
            <p>
            Capital City: {capital}
            </p>
            
            <p>
            Continent/Region: {region}
            </p>
            
            <p>
            Sub-region: {subregion}
            </p>
            
            <p>
            population: {population}
            </p>
            
        </div>
      
    )
}

export default GetApiResults;