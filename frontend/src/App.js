import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={HomePage} exact />
    </div>
  );
}

export default App;
