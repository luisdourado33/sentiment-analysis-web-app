import React from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";

import LoginView from "./views/LoginView/LoginView";
import SignUpView from "./views/SignUpView/SignUpView";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteList>
        <Route path="/" element={<LoginView />} />
        <Route path="/signup" element={<SignUpView />} />
      </RouteList>
    </BrowserRouter>
  );
};

export default Routes;
