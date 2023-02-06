import { useEffect, useState } from "react";

import { request } from "../services/axios";
import { Post } from "../protocols";

export default function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    request
      .get(import.meta.env.VITE_BASE_URL)
      .then((answer) => {
        setPosts(answer.data);
      })
      .catch((answer) => console.log(answer));
  }, [refresh]);

  return { posts, setPosts, refresh, setRefresh };
}
