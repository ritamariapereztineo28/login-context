import "./App.css";
import Page1 from "./components/Page1";
// import { Route, Router } from "react-router";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Page2 from "./components/Page2";
import {UserContext} from "./context/User/userContext";
import { userReducer } from "./context/User/userReducer";
import Page3 from "./components/Page3";
import useUser from "./context/User/useUser";
function App() {
  const state = useUser();
  return (
    <div>
      <Switch>
        <UserContext.Provider value={state}>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page3">
            <Page3 />
          </Route>
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
