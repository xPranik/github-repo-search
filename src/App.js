import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import {SEARCH_ROUTE} from "./utils/consts";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          {routes.map(({path, Component}) => (
            <Route key={path} path={path} component={Component}/>
          ))}
          <Redirect to={SEARCH_ROUTE} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
