import { useContext } from "react";
import PostContext from "../../Context/post";
import { Results, SearchPosts } from "../index";

function Header() {
  const { handleClearPosts } = useContext(PostContext);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
