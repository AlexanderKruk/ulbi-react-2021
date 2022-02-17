import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router'

export const AppRouter = () => {
  const isAuth = true
  return (
    <Switch>
      {
        isAuth 
          ? privateRoutes.map(({path, component, exact}) => 
          <Route key={path} path={path} component={component} exact={exact}/>)
          : publicRoutes.map(({path, component, exact}) => 
          <Route key={path} path={path} component={component} exact={exact}/>)
      }
      <Redirect to="/error" />
    </Switch>
  );
};
