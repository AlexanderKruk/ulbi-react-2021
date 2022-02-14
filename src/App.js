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
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import { useGetPages } from "./hooks/useGetPages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [postFetch, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(page, limit);
    if (response) {
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  });

  const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query);

  useEffect(() => {
    postFetch();
  }, [page]);

  const pages = useGetPages(totalPages);

  const addPost = (e, post) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setVisibleModal(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
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
      {isLoading ? (
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
          error={error}
        />
      )}
      <div className="page__wrapper">
        {pages.map((item) => (
          <span
            className={page === item ? "page page__current" : "page"}
            key={item}
            onClick={() => setPage(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
