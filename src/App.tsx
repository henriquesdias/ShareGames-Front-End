import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ResetStyle } from "./styles/Reset";
import Feed from "./pages/Feed";
import PostWithComments from "./components/Post-with-comments";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/comments" element={<PostWithComments />} />
      </Routes>
    </BrowserRouter>
  );
}
