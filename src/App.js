import './App.css';
import Components from "./Components/Components.js";
import Parse from "parse";
import * as ENV from './environments.js';

function App() {
  //Parse initialization
  Parse.initialize(ENV.APPLICATION_ID,ENV.JAVASCRIPT_KEY);
  Parse.serverURL = ENV.SERVER_URL;
  
  return (
    <Components />
  );
}

export default App;
