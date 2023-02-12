import { useNavigate } from "react-router-dom";

import { Post } from "../protocols";
import { IconComment } from "../styles/Icons";
import PrincipalPost from "./Post";

interface SinglePostProps {
  post: Post;
}

export default function SinglePost({ post }: SinglePostProps) {
  const navigate = useNavigate();
  return (
    <PrincipalPost post={post}>
      <IconComment
        onClick={() =>
          navigate("/comments", {
            state: {
              post: post,
            },
          })
        }
      />
    </PrincipalPost>
  );
}
