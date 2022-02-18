import { useEffect, useRef, useState } from "react";
import { PostForm } from "../components/PostForm";
import { PostList } from "../components/PostList";
import "../styles/App.css";
import { PostFilter } from "../components/PostFilter";
import { Modal } from "../components/ui/Modal/Modal";
import { Button } from "../components/ui/Button/Button";
import { usePosts } from "../hooks/usePosts";
import { PostService } from "../api/PostService";
import { Loader } from "../components/ui/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from '../hooks/useObserver'
import { Select } from "../components/ui/Select/Select";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit ] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef()

  const [postsFetch, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(page, limit);
    if (response) {
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
      setPosts([...posts, ...response.data]);
    }
  });

  const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query);

  useEffect(() => {
    postsFetch();
  }, [page, limit]);

  useObserver(lastElement, page < totalPages, isLoading,() => {
    setPage(page + 1)
  })

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
      <Select
        selectedValue={limit}
        onChange={(e) => setLimit(e.target.value)}
        defaultValue={"Count of posts"}
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: -1, name: "all"}
        ]}
      />
      <PostList
          posts={sortedAndSearchedPosts}
          title={"List of posts"}
          deletePost={deletePost}
          error={error}
        />
      <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
}