import { useState } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { MySelect } from "./components/UI/Select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "A", description: "B" },
    { id: 2, title: "C", description: "C" },
    { id: 3, title: "B", description: "A" },
  ]);

  const options = [
    { value: "title", name: "By title" },
    { value: "description", name: "By description" },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const addPost = (e, post) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const selectOnChange = (e) => {
    setSelectedValue(e.target.value);
    setPosts(
      [...posts].sort((a, b) =>
        a[e.target.value].localeCompare(b[e.target.value])
      )
    );
  };

  return (
    <div className="app">
      <PostForm addPost={addPost} />
      <MySelect
        options={options}
        defaultValue={"Choose sort"}
        selectedValue={selectedValue}
        onChange={selectOnChange}
      />
      {posts.length < 1 ? (
        <h1 style={{ textAlign: "center", marginTop: 100 }}>Posts not found</h1>
      ) : (
        <PostList
          posts={posts}
          title={"List of posts"}
          deletePost={deletePost}
        />
      )}
    </div>
  );
}

export default App;
