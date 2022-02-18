import React, { useContext } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router'
import { Loader } from './ui/Loader/Loader';

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth 
      ?
        <Switch>
          {privateRoutes.map(({path, component, exact}) => 
          <Route key={path} path={path} component={component} exact={exact}/>)}
          <Redirect to="/posts"/>
        </Switch>
      : 
        <Switch>
          {publicRoutes.map(({path, component, exact}) => 
          <Route key={path} path={path} component={component} exact={exact}/>)}
          <Redirect to="/login"/>
        </Switch>
  );
};
