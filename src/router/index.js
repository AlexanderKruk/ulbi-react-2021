import { Posts } from "../pages/Posts";
import { About } from "../pages/About";
import { Error } from "../pages/Error";
import { Post } from "../pages/Post";
import { Login } from "../pages/Login";

export const privateRoutes = [
  { path: "/posts", component: Posts, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/error", component: Error, exact: true },
  { path: "/post/:id", component: Post, exact: true },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
