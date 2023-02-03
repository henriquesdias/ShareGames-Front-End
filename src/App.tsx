import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ResetStyle } from "./styles/Reset";
import Feed from "./pages/Feed";
import PostWithComments from "./components/Post-With-Comments";
import { UserContext } from "./context/User-Context";

export default function App() {
  const tokenStorage = localStorage.getItem("token");
  const [token, setToken] = useState<string>(() =>
    tokenStorage ? tokenStorage : ""
  );
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken }}>
        <ThemeProvider theme={{ isDarkMode, setIsDarkMode }}>
          <ResetStyle />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/comments" element={<PostWithComments />} />
          </Routes>
        </ThemeProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
