import styled from "styled-components";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import picture from "../assets/default-profile.jpg";
import { Container } from "../styles/Single-Post";
import Comment from "./Comments";
import { Post } from "../protocols";

type SinglePostProps = {
  post: Post;
  showComments: boolean;
};

const IconComment = styled(IoChatbubbleEllipsesOutline)`
  color: black;
  font-size: 28px;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    opacity: 60%;
  }
`;

export function SinglePost({ post, showComments }: SinglePostProps) {
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
        post.Comments.map((e, index) => <Comment comment={e} key={index} />)
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
