import './../cityresults.css';
import './../App.css';
import GetApiResults2 from '../Components/getAPIResults2';

export const CityResults = ({citySearch, countrySearch}) =>  {
  return (
    
    <div id='App-header'>
      <GetApiResults2 citySearch={{citySearch}} countrySearch={{countrySearch}}/>
    </div>
  );
}

export default CityResults;
