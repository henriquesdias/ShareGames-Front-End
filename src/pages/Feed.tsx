import { useEffect, useState } from "react";

import { request } from "../services/axios";
import { Post } from "../protocols";
import { SinglePost } from "../components/Single-Post";
import { Container } from "../styles/Feed";
import { Header } from "../styles/Header";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    request
      .get(import.meta.env.VITE_BASE_URL)
      .then((answer) => {
        setPosts(answer.data);
      })
      .catch((answer) => console.log(answer));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div>
          {posts.map((e, index) => (
            <SinglePost post={e} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
