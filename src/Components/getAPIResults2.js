import { useState, useEffect, Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import '../cityresults.css'

export const GetApiResults2 = ({citySearch, countrySearch}) => {
    console.log("city", citySearch);
    console.log("country",countrySearch);

    // const StoredCity = JSON.parse(localStorage.getItem('StoredCity'));
    // const StoredPrices = JSON.parse(localStorage.getItem('StoredPrices'));

    const [result, setResult] = useState([]);
    const [priceResult, setPriceResult] = useState([]);
    // const[loading,setLoading] = useState(true);

    // The following API call gets the city latitude and longitude for the map view
    async function LoadResults() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2a2ea111b2mshd91e582c07f3e2ap1bc84djsnd1a8bd9d5b22',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
      };
      
      await fetch('https://cost-of-living-and-prices.p.rapidapi.com/cities', options)
	    .then(response => response.json())
        .then(response => {
         for (let i = 0; i < response.cities.length; i++) {
            if (response['cities'][i]['city_name'] === citySearch.citySearch.city) {
                setResult(response['cities'][i]);
                localStorage.setItem('StoredCity', JSON.stringify(response['cities'][i]));
                console.log(response['cities'][i]);
            }
        }})
        .catch(err => console.error(err));
    }

    useEffect(() => {
      LoadResults();
    }, []);

    const city = citySearch.citySearch.city;
    const latitude = result['lat'];
    const longitude = result['lng'];
    const country = result['country_name'];

    // Google maps component here
    class MapContainer extends Component {
      render() {
        
        return (
          <Map
            google={this.props.google}
            zoom={8}
            style={ {width: '25%', height: '25%', position: 'relative'} }
            initialCenter={{ lat: latitude, lng: longitude}}
            
          />
        )
      }
    }

    MapContainer = GoogleApiWrapper({
      apiKey: "AIzaSyBjH_kpDVGSCzIwlUhLRM20tDTL4Tz9_ZM"
    })(MapContainer)

    // The API call is to compare living prices in the city
    async function LoadPriceResults(myCity, myCountry) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2a2ea111b2mshd91e582c07f3e2ap1bc84djsnd1a8bd9d5b22',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
      };
      myCountry = countrySearch.countrySearch.country;

      await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${myCity}&country_name=${myCountry}`, options)
        .then(response => response.json())
        .then(response => {
        setPriceResult(response.prices);
        localStorage.setItem('StoredPrices', JSON.stringify(response));
        // setLoading(false)
        console.log(response);        
        })
        .catch(err => console.error(err));
    }

      console.log("prices", priceResult);
    useEffect(() => {

      LoadPriceResults(city, country);
    }, []);
    
    function makeTable(data) {
      const table = document.getElementById('Prices');
      for (let i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${data[i].item_name}</td>
                    <td>${data[i].category_name}</td>
                    <td>${data[i].max}</td>
                    </tr>`
        table.innerHTML += row;
      }
    }

    makeTable(priceResult);

    // localStorage.clear();

    return (
        <div>
          <br></br>
            <br></br>
            <div>
            <div>
            <MapContainer />
            <p>
            * Press the word Google in the map
            </p>
            
            </div>
            <br></br>
            <br></br>
            <br></br>
          <div>
          <p>
          City Name: {city}
          <br></br>
          <p>
          Country: {country}
          </p>
          <br></br>
          Latitude, Longitude: [{latitude}, {longitude}]
          </p>
         
          </div>
            </div>

            <br></br>
            <br></br>
            <h1>
            Prices of goods and services in {city}, {country}
            </h1>
            <br></br>
            <br></br>
            <br></br>

            <div>
              <table>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Price in KES</th>
                </tr>
                <tbody id='Prices'>
                </tbody>
              </table>
              <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            </div>
      </div>
    )
    
}

export default GetApiResults2;