import { useLocation } from "react-router-dom";

import Header from "./Header";
import { SinglePost } from "./Single-Post";
import { ContainerFeed } from "../styles/Feed";

export default function PostWithComments() {
  const { state } = useLocation();

  return (
    <>
      <Header />
      <ContainerFeed>
        <div>
          <SinglePost showComments={true} post={state.post} />
        </div>
      </ContainerFeed>
    </>
  );
}
