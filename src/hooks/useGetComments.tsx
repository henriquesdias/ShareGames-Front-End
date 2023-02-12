import { useState, useEffect } from "react";

import { getComments } from "../api/get-comments";
import { Comment } from "../protocols";

export default function useGetComments(postId: number) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    getComments(postId)
      .then((res) => {
        setComments(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [refresh]);

  return { comments, setComments, refresh, setRefresh };
}
