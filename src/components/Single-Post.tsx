import { Container } from "../styles/Single-Post";
import picture from "../assets/default-profile.jpg";
import { Post } from "../protocols";

type SinglePostProps = {
  post: Post;
};

export function SinglePost({ post }: SinglePostProps) {
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
    </Container>
  );
}
