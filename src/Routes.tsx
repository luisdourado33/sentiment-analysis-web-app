import React, { useContext } from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";

import { AppContext } from "./context";

import LoginView from "./views/LoginView/LoginView";
import SignUpView from "./views/SignUpView/SignUpView";
import DashboardView from "./views/DashboardView/DashboardView";

const Routes = () => {
  const { state } = useContext(AppContext);


  if (state.isLogged) {
    return (
      <BrowserRouter>
        <RouteList>
          <Route path='/' element={<DashboardView />} />
        </RouteList>
      </BrowserRouter>
    );
  }

  return (
      <BrowserRouter>
        <RouteList>
          <Route
            path="/"
            element={<LoginView />}
          />
          <Route path="/signup" element={<SignUpView />} />
        </RouteList>
      </BrowserRouter>
  );
};

export default Routes;
