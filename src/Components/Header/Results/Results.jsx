import { useContext } from "react";
import PostContext from "../../../Context/post";

function Results() {
  const { searchedPosts } = useContext(PostContext);
  return <p>🚀 {searchedPosts.length} atomic posts found</p>;
}

export default Results;
