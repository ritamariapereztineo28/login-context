import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { AppContextProvider } from "./context/User/Appcontext";
import { Container } from "@material-ui/core";

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
