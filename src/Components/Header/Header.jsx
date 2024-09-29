import { useContext } from "react";
import PostContext from "../../Context/post";
import { Results, SearchPosts, Button } from "../index";

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
        <Button onClick={handleClearPosts}>Clear posts</Button>
      </div>
    </header>
  );
}

export default Header;
