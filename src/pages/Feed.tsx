import { SinglePost } from "../components/Single-Post";
import { ContainerFeed } from "../styles/Feed";
import Header from "../components/Header";
import usePosts from "../hooks/usePosts";

import CreatePost from "../components/Create-post";

export default function Feed() {
  const { posts } = usePosts();

  return (
    <>
      <Header />
      <ContainerFeed>
        <div>
          <CreatePost />
          {posts.map((e, index) => (
            <SinglePost showComments={false} post={e} key={index} />
          ))}
        </div>
      </ContainerFeed>
    </>
  );
}
