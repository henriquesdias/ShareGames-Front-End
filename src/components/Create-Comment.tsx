import { FormEvent, useState } from "react";
import { redirect } from "react-router-dom";

import { createComment } from "../api/create-comment";
import useToken from "../hooks/useToken";
import { CreateCommentContainer } from "../styles/Container-Create-Comment";

interface CreateCommentProps {
  postId: number;
  refresh: boolean;
  setRefresh: Function;
}

export default function CreateComment({
  postId,
  refresh,
  setRefresh,
}: CreateCommentProps) {
  const [form, setForm] = useState({ description: "" });
  const { token } = useToken();
  function submitData(event: FormEvent) {
    event.preventDefault();
    createComment({ token, postId, description: form.description })
      .then(() => setRefresh(!refresh))
      .catch((res) => console.log(res));
  }
  return (
    <>
      {token ? (
        <CreateCommentContainer onSubmit={submitData}>
          <input
            type="text"
            name="description"
            value={form.description}
            placeholder="Escreva sua mensagem"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <button type="submit">Enviar</button>
        </CreateCommentContainer>
      ) : (
        <></>
      )}
    </>
  );
}
