import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import { Post } from "../protocols";
import { ContainerFeed } from "../styles/Container-Feed";
import PrincipalPost from "../components/Post";
import CreateComment from "../components/Create-Comment";
import EachComment from "../components/Comment";
import useGetComments from "../hooks/useGetComments";

interface CommentsProps {
  post: Post;
}

function Comments({ post }: CommentsProps) {
  const { comments, setComments, refresh, setRefresh } = useGetComments(
    post.id
  );
  return (
    <PrincipalPost post={post}>
      <>
        <CreateComment
          postId={post.id}
          refresh={refresh}
          setRefresh={setRefresh}
        />
        {comments.map((e, index) => (
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
