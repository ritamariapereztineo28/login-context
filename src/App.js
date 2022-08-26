import "./App.css";
import Page1 from "./components/Page1";
// import { Route, Router } from "react-router";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Page2 from "./components/Page2";
import  UserContext  from "./context/User/userContext";
import Page3 from "./components/Page3";
import useUser from "./context/User/useUser";
import { initialState } from "./context/User/initialState";
function App() {
  // const state = useContext(UserContext)
  const state = useUser();
  // const [state,dispatch] = useReducer(userReducer, initialState);
// console.log("estado-----",state)
  // return (
    return (
      <BrowserRouter>
        <UserContext.Provider value={state}>
          <Switch>
            <Route exact path="/page2" component={Page2} />
            <Route path="/" component={Page1} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    // );
    // <BrowserRouter>
    //   <Switch>
    //     <UserContext.Provider value={state}>
    //       <Route exact path="/">
    //         <Page1 />
    //       </Route>
    //       <Route path="/page2">
    //         <Page2 />
    //       </Route>
    //       <Route path="/page3">
    //         <Page3 />
    //       </Route>
    //     </UserContext.Provider>
    //   </Switch>
    //   {/* <Redirect from="*" to="/" /> */}
    // </BrowserRouter>
  );
}

export default App;
