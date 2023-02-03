import { useState } from "react";

import { IoPaperPlaneOutline } from "react-icons/io5";

import styled from "styled-components";
import { CreatePostContainer } from "../styles/Container-Create-post";
import useToken from "../hooks/useToken";
import createPost from "../api/create-post";

const SendButton = styled(IoPaperPlaneOutline)`
  font-size: 28px;
`;

export default function CreatePost() {
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
    <CreatePostContainer onSubmit={submitData}>
      <input
        type="text"
        placeholder="Faça uma pergunta ..."
        value={form.description}
        name="description"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        required
      />
      <button type="submit">
        <SendButton />
      </button>
    </CreatePostContainer>
  );
}
