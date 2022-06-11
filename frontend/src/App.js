import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import chatPage from "./Pages/chatPage";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={HomePage} exact />
      <Route path={"/chats"} component={chatPage} exact />
    </div>
  );
}

export default App;
