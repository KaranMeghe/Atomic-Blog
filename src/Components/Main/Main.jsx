import { Posts, FormAddPost } from "../index";
function Main({ onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts />
    </main>
  );
}

export default Main;
