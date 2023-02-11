import { useState, FormEvent } from "react";

import { CreatePostContainer } from "../styles/Container-Create-Post";
import useToken from "../hooks/useToken";
import createPost from "../api/create-post";
import { SendButton } from "../styles/Icons";
import PrivateComponent from "./Private-Component";

interface CreatePostProps {
  refresh: boolean;
  setRefresh: Function;
}

export default function CreatePost({ refresh, setRefresh }: CreatePostProps) {
  const { token } = useToken();
  const [form, setForm] = useState({
    description: "",
  });
  function submitData(event: FormEvent) {
    event.preventDefault();
    createPost(form.description, token)
      .then(() => setRefresh(!refresh))
      .catch((res) => console.log(res));
  }
  return (
    <PrivateComponent>
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
    </PrivateComponent>
  );
}
