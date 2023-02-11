import { useLocation } from "react-router-dom";

import Header from "./Header";
import { Post } from "../protocols";
import { ContainerFeed } from "../styles/Container-Feed";
import PrincipalPost from "./Post";
import CreateComment from "./Create-Comment";
import EachComment from "./Comment";

interface PostWithCommentsProps {
  post: Post;
}

function Comments({ post }: PostWithCommentsProps) {
  return (
    <PrincipalPost post={post}>
      <>
        <CreateComment postId={post.id} />
        {post.Comments.map((e, index) => (
          <EachComment comment={e} key={index} />
        ))}
      </>
    </PrincipalPost>
  );
}

export default function PostWithComments() {
  const { state } = useLocation();
  const post = state.post;

  return (
    <>
      <Header />
      <ContainerFeed>
        <div>
          <Comments post={post} />
        </div>
      </ContainerFeed>
    </>
  );
}
