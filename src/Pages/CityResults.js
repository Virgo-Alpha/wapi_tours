import './../App.css';
import GetApiResults2 from '../Components/getAPIResults2';

export const CityResults = ({city}) =>  {
  return (
    // Code for the App
    
    <div className="App-header">
      <GetApiResults2 city={{city}}/>
    </div>
  );
}

export default CityResults;
