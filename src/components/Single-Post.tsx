import { useNavigate } from "react-router-dom";

import picture from "../assets/default-profile.jpg";
import { Container } from "../styles/Container-Single-Post";
import Comment from "./Comments";
import { Post } from "../protocols";
import { IconComment } from "../styles/Icons";
import CreateComment from "./Create-Comment";

interface SinglePostProps {
  post: Post;
  showComments: boolean;
  refresh: boolean;
  setRefresh: Function;
}

export function SinglePost({
  post,
  showComments,
  refresh,
  setRefresh,
}: SinglePostProps) {
  const navigate = useNavigate();
  return (
    <Container>
      <span>
        <img
          src={post.Users.picture ? post.Users.picture : picture}
          alt="picture-profile"
        />
        <p>{post.Users.username}</p>
      </span>
      <p>{post.description}</p>
      {showComments ? (
        <>
          <CreateComment
            postId={post.id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
          {post.Comments.map((e, index) => (
            <Comment comment={e} key={index} />
          ))}
        </>
      ) : (
        <IconComment
          onClick={() =>
            navigate("/comments", {
              state: {
                post: post,
              },
            })
          }
        />
      )}
    </Container>
  );
}
