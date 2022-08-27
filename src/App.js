import "./App.css";
import Page1 from "./components/Page1";
// import { Route, Router } from "react-router";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Page2 from "./components/Page2";
import { UserContext } from "./context/User/userContext";
import Page3 from "./components/Page3";
import useUser from "./context/User/useUser";
import { Router } from "@mui/icons-material";
import { useReducer } from "react";
import { initialState } from "./context/User/initialState";
import userReducer from "./context/User/userReducer";
import { AppContextProvider } from "./context/User/Appcontext";

function App() {
  return (
    <AppContextProvider>
        <BrowserRouter>
        <Switch>
          <Route exact path="/page3" component={Page3} />
          <Route exact path="/page2" component={Page2} />
          <Route path="/" component={Page1} />
        </Switch>
    </BrowserRouter>
      </AppContextProvider>
  );
}

export default App;
