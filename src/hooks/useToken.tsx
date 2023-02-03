import { useContext } from "react";

import { UserContext } from "../context/User-Context";

export default function useToken() {
  const { token } = useContext(UserContext);
  return { token };
}
