import React, { Fragment } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="*" component={() => <div>Pagina inexistente</div>} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
