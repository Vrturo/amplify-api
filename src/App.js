import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listBetaAmplifySampleTables } from './graphql/queries';

Amplify.configure(awsconfig);

function App() {
  // const list = API.graphql(graphqlOperation(listBetaAmplifySampleTables));
  
  const getData = async () => {
    try {
      const list = await API.graphql({query: listBetaAmplifySampleTables});
      console.log(list);
    } catch (err) {
        console.log("error deleting data:", err);
    }
  };

  // const list = await API.graphql({query: listBetaAmplifySampleTables});
  console.log(getData());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
