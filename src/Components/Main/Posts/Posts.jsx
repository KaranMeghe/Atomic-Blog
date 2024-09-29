import { useContext } from "react";
import PostContext from "../../../Context/post";
import { List } from "../../index";
function Posts() {
  const { searchedPosts } = useContext(PostContext);
  return (
    <section>
      <List searchedPosts={searchedPosts} />
    </section>
  );
}

export default Posts;
