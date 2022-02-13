import { useEffect, useState } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import "./styles/App.css";
import { PostFilter } from "./components/PostFilter";
import { Modal } from "./components/ui/Modal/Modal";
import { Button } from "./components/ui/Button/Button";
import { usePosts } from "./hooks/usePosts";
import { PostService } from "./api/PostService";
import { Loader } from "./components/ui/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query);

  useEffect(() => {
    fetchPosts();
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
    setLoading(true);
    setTimeout(async () => {
      const response = await PostService.getAll();
      setLoading(false);
      if (response) {
        setPosts(response.data);
      }
    }, 1000);
  };

  return (
    <div className="app">
      <Button style={{ marginTop: 20 }} onClick={() => setVisibleModal(true)}>
        Create post
      </Button>
      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm addPost={addPost} />
      </Modal>
      <hr style={{ margin: "20px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={"List of posts"}
          deletePost={deletePost}
        />
      )}
    </div>
  );
}

export default App;
