import { FormEvent, useState } from "react";

import styled from "styled-components";

import { createComment } from "../api/create-comment";
import useToken from "../hooks/useToken";

interface CreateCommentProps {
  postId: number;
}

export default function CreateComment({ postId }: CreateCommentProps) {
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

const CreateCommentContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
  input {
    outline: none;
    border: none;
    border-radius: 10px;
    width: 80%;
  }
  button {
    border: none;
  }
`;
