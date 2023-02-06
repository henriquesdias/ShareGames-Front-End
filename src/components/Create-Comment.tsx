import { FormEvent, useState } from "react";

import { createComment } from "../api/create-comment";
import useToken from "../hooks/useToken";
import { CreateCommentContainer } from "../styles/Container-Create-Comment";
import { Post } from "../protocols";

interface CreateCommentProps {
  postId: number;
  posts: Post[];
  setPosts: Function;
}

export default function CreateComment({
  postId,
  posts,
  setPosts,
}: CreateCommentProps) {
  const [form, setForm] = useState({ description: "" });
  const { token } = useToken();
  function submitData(event: FormEvent) {
    event.preventDefault();
    createComment({ token, postId, description: form.description })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }
  return (
    <CreateCommentContainer onSubmit={submitData}>
      <input
        type="text"
        name="description"
        value={form.description}
        placeholder="Escreva sua mensagem"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <button type="submit">Enviar</button>
    </CreateCommentContainer>
  );
}
