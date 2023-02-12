import { request } from "../services/axios";

export async function getComments(postId: number) {
  const URL = `${import.meta.env.VITE_BASE_URL}comments/${postId}`;
  return request.get(URL);
}
