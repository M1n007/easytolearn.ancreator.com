import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import Header from "../components/header/header";

import "./router.css"

class ReactRouter extends React.Component {
  render() {
    return (
      <div className="background">
        <Header />
        <React.Fragment>
          <Route exact path="/" component={App} />
        </React.Fragment>
      </div>
    );
  }
}

export default ReactRouter;
