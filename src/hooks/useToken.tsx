import { useContext } from "react";

import { UserContext } from "../context/User-Context";

export default function useToken() {
  const { token, setToken } = useContext(UserContext);
  return { token, setToken };
}
