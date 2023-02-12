import { FormEvent, useState } from "react";

import { createComment } from "../api/create-comment";
import useToken from "../hooks/useToken";
import { CreateCommentContainer } from "../styles/Container-Create-Comment";
import PrivateComponent from "./Private-Component";

interface CreateCommentProps {
  postId: number;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
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
    <PrivateComponent>
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
    </PrivateComponent>
  );
}
