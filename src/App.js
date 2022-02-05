import { PostItem } from "./components/PostItem";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <PostItem
        post={{
          id: 1,
          title: "Javascript",
          description: "JS programmin language",
        }}
      />
      <PostItem
        post={{
          id: 2,
          title: "Javascript",
          description: "JS programmin language",
        }}
      />
      <PostItem
        post={{
          id: 3,
          title: "Javascript",
          description: "JS programmin language",
        }}
      />
    </div>
  );
}

export default App;
