import { useLocation } from "react-router-dom";

import { Header } from "../styles/Header";
import { SinglePost } from "./Single-Post";
import { ContainerFeed } from "../styles/Feed";

export default function Comments() {
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
