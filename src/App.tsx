import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ResetStyle } from "./styles/Reset";
import Feed from "./pages/Feed";
import PostWithComments from "./components/Post-with-comments";
import { UserContext } from "./context/User-Context";

export default function App() {
  const tokenStorage = localStorage.getItem("token");
  const [token, setToken] = useState<string>(() =>
    tokenStorage ? tokenStorage : ""
  );

  return (
    <BrowserRouter>
      <ResetStyle />
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/comments" element={<PostWithComments />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
