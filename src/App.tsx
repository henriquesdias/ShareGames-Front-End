import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ResetStyle } from "./styles/Reset";
import Feed from "./pages/Feed";
import Comments from "./components/Comments";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}
