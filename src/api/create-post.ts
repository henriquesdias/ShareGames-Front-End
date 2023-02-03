import { request } from "../services/axios";

const URL = `${import.meta.env.VITE_BASE_URL}create-post`;

export default function createPost(description: string, token: string) {
  return request.post(URL, { description }, token);
}
