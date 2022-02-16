import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { Posts } from '../pages/Posts'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { Post } from '../pages/Post';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};
