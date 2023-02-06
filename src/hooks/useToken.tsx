import { useContext } from "react";

import { UserContext } from "../context/User-Context";

export default function useToken() {
  const { token, setToken } = useContext(UserContext);
  const base64Url = token.split(".")[1];
  const info = JSON.parse(atob(base64Url));
  return { token, setToken };
}
