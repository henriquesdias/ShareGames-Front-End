import styled from "styled-components";
import { Comment } from "../protocols";
import picture from "../assets/default-profile.jpg";

type CommentProps = {
  comment: Comment;
};

export default function Comments({ comment }: CommentProps) {
  return (
    <CommentContainer>
      <span>
        <img
          src={comment.Users.picture ? comment.Users.picture : picture}
          alt="picture-profile"
        />
        <p>{comment.Users.username}</p>
      </span>
      <p>{comment.description}</p>
      <div>ícones</div>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  margin: 20px 0;
`;
