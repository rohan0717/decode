import React from "react";
import classes from "./App.module.css";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import About from "./containers/About/About";

function App() {
  return (
    <div className={classes.App}>
      <Layout data={}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
