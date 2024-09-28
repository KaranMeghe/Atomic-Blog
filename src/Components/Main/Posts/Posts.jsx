import { List } from "../../index";
function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
