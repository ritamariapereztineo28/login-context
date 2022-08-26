import "./App.css";
import Page1 from "./components/Page1";
// import { Route, Router } from "react-router";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Page2 from "./components/Page2";
import { UserContext } from "./context/userContext";
import Page3 from "./components/Page3";
import { useState } from "react";
function App() {
  const userData = {
    name: 'nena',
    apellido: 'nena',
  };
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={userData}>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
        </UserContext.Provider>
      </Switch>
      {/* <Redirect from="*" to="/" /> */}
    </BrowserRouter>
  );
}

export default App;
