import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FTP from "./pages/Ftp";

export default function Router() {
  const routes = [
    {
      name: "home",
      exact: true,
      component: Home,
      path: "/"
    },
    {
      name: "ftp",
      exact: true,
      component: FTP,
      path: "/ftp"
    }
  ];
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
