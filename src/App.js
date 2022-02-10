import { useState, useMemo } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import "./styles/App.css";
import { PostFilter } from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "A", description: "B" },
    { id: 2, title: "C", description: "C" },
    { id: 3, title: "B", description: "A" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const addPost = (e, post) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="app">
      <PostForm addPost={addPost} />
      <hr style={{ margin: "20px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title={"List of posts"}
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
