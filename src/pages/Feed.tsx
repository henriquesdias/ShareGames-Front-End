import { SinglePost } from "../components/Single-Post";
import { ContainerFeed } from "../styles/Feed";
import { Header } from "../styles/Header";
import usePosts from "../hooks/usePosts";

export default function Feed() {
  const { posts } = usePosts();

  return (
    <>
      <Header />
      <ContainerFeed>
        <div>
          {posts.map((e, index) => (
            <SinglePost showComments={false} post={e} key={index} />
          ))}
        </div>
      </ContainerFeed>
    </>
  );
}
