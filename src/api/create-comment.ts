import { request } from "../services/axios";

type NewCommentParams = {
  postId: number;
  description: string;
  token: string;
};

export async function createComment({
  postId,
  description,
  token,
}: NewCommentParams) {
  const URL = `${import.meta.env.VITE_BASE_URL}comments/${postId}`;
  return request.post(URL, { description }, token);
}
