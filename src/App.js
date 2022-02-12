import { useEffect, useState } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import "./styles/App.css";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/ui/MyModal/MyModal";
import { MyButton } from "./components/ui/MyButton/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query);

  useEffect(() => {
    console.log("Use effect");
  }, []);

  const addPost = (e, post) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setVisibleModal(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  return (
    <div className="app">
      <MyButton onClick={fetchPosts}>Fetch posts</MyButton>
      <MyButton style={{ marginTop: 20 }} onClick={() => setVisibleModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm addPost={addPost} />
      </MyModal>
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
