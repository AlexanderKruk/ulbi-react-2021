import { useState } from "react";
import { PostList } from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", description: "JS programmin language" },
    { id: 2, title: "Javascript", description: "JS programmin language" },
    { id: 3, title: "Javascript", description: "JS programmin language" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", description: "JS programmin language" },
    { id: 2, title: "Python", description: "JS programmin language" },
    { id: 3, title: "Python", description: "JS programmin language" },
  ]);

  return (
    <div className="app">
      <PostList posts={posts} title={"List of posts"} />
      <PostList posts={posts2} title={"List of posts"} />
    </div>
  );
}

export default App;
