import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { BrowserRouter, Route, Switch, Redirect, withRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/list/:id" exact component={List} />
      <Route path="/post/:id" exact component={Post} /> */}
      <Route path="/" exact component={App} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
