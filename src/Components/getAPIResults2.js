import { useState, useEffect, Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import '../cityresults.css'

export const GetApiResults2 = ({citySearch}) => {
    // console.log(citySearch);

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
                console.log(response['cities'][i]);
            }
        }})
        .catch(err => console.error(err));
    }

    useEffect(() => {
      LoadResults();
    }, []);

    const [result, setResult] = useState([]);

    const city = citySearch.citySearch.city;
    const latitude = result['lat'];
    const longitude = result['lng'];
    const country = result['country_name'];

    console.log({
      country: country,
    })

    // Google maps component here
    class MapContainer extends Component {
      render() {
        
        return (
          <Map
            google={this.props.google}
            zoom={6}
            style={ {width: '25%', height: '25%', position : 'relative'} }
            initialCenter={{ lat: latitude, lng: longitude}}
            
          />
        )
      }
    }

    MapContainer = GoogleApiWrapper({
      apiKey: 'AIzaSyBjH_kpDVGSCzIwlUhLRM20tDTL4Tz9_ZM'
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

      await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${myCity}&country_name=${myCountry}`, options)
        .then(response => response.json())
        .then(response => {
        //   for (let i = 0; i < response.length; i++) {
        //     if (response[i]['city_name'] === citySearch.citySearch.city) {
        //         // setResult(response['cities'][i]);
        //         console.log(response[i]);
        //     }
        // }
        console.log(response);
        console.log(myCity);
        console.log(myCountry);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
      // ! Error is is assignment of country below
      LoadPriceResults(city, country);
    }, []);

    return (
        <div>
          <p>
          city Name: {city}
          <br></br>
          Latitude: {latitude}
          <br></br>
          Longitude: {longitude}
          </p>
          <br></br>
          <p>
          Country: {country}
          </p>
          <p id='myMap'>
            Map
          <MapContainer />
          </p>
        </div>
    )
}

export default GetApiResults2;