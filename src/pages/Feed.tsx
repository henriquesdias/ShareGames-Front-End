import { SinglePost } from "../components/Single-Post";
import { ContainerFeed } from "../styles/Container-Feed";
import Header from "../components/Header";
import usePosts from "../hooks/usePosts";

import CreatePost from "../components/Create-Post";

export default function Feed() {
  const { posts, setPosts, refresh, setRefresh } = usePosts();
  return (
    <>
      <Header />
      <ContainerFeed>
        <div>
          <CreatePost refresh={refresh} setRefresh={setRefresh} />
          {posts.map((e, index) => (
            <SinglePost
              showComments={false}
              post={e}
              posts={posts}
              setPosts={setPosts}
              key={index}
            />
          ))}
        </div>
      </ContainerFeed>
    </>
  );
}
