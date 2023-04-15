import './../App.css';
import '../results.css'

import GetApiResults from '../Components/getAPIResults';

export const Results = ({countrySearch}) =>  {
  return (
    
    <div className="App-header">
      <GetApiResults countrySearch={countrySearch}/>
    </div>
  );
}

export default Results;
