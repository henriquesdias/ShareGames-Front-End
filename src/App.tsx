import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ResetStyle } from "./styles/Reset";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}
