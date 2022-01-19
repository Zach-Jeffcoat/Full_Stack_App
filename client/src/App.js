import './App.css';
import NewGame from "./components/NewGame";
import OneGame from "./components/OneGame";
import AllGames from "./components/AllGames";
import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <AllGames path="/" />
        <NewGame path="/new" />
        <OneGame path="/games/:id" />
      </Router>
    </div>
  );
}

export default App;
