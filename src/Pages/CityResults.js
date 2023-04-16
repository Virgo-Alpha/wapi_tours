import './../App.css';
import GetApiResults2 from '../Components/getAPIResults2';

export const CityResults = ({citySearch}) =>  {
  return (
    
    <div className="App-header">
      <GetApiResults2 citySearch={{citySearch}}/>
    </div>
  );
}

export default CityResults;
