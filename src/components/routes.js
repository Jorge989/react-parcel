import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Home from "../pages/Home/App";
import { Provider, useSelector } from "react-redux";
import { store } from "../store"; // your Redux store
import { ToastContainer, toast } from "react-toastify";
import Error from "../pages/Error/Error";

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="react-parcel">
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Switch>
          <Route exact path="/error" component={Error}></Route>
        </Switch>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
