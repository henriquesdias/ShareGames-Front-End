import { Container } from "../styles/Container-Single-Post";
import { Post } from "../protocols";
import picture from "../assets/default-profile.jpg";

interface PostProps {
  children: JSX.Element;
  post: Post;
}

export default function PrincipalPost({ children, post }: PostProps) {
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
      {children}
    </Container>
  );
}
