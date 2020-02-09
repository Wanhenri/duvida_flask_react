import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
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
    // exemplo da rota sem o spread operator(...):
    // <Route key={route.name} name={route.name} path={route.path} exact={route.exact} component={route.component}></Route>
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
