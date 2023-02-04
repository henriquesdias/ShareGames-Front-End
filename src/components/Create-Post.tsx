import { useState } from "react";

import { CreatePostContainer } from "../styles/Container-Create-Post";
import useToken from "../hooks/useToken";
import createPost from "../api/create-post";
import { SendButton } from "../styles/Icons";
import { Post } from "../protocols";

type CreatePostProps = {
  posts: Omit<Post, "Users" | "Comments">[];
  setPosts: Function;
};
export default function CreatePost({ posts, setPosts }: CreatePostProps) {
  const { token } = useToken();
  const [form, setForm] = useState({
    description: "",
  });
  function submitData(event: React.FormEvent) {
    event.preventDefault();
    createPost(form.description, token)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }
  return (
    <>
      {token === "" ? (
        <></>
      ) : (
        <CreatePostContainer onSubmit={submitData}>
          <input
            type="text"
            placeholder="Faça uma pergunta ..."
            value={form.description}
            name="description"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            required
          />
          <button type="submit">
            <SendButton />
          </button>
        </CreatePostContainer>
      )}
    </>
  );
}
