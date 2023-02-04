import { request } from "../services/axios";

export default function createPost(description: string, token: string) {
  const URL = `${import.meta.env.VITE_BASE_URL}create-post`;
  return request.post(URL, { description }, token);
}
