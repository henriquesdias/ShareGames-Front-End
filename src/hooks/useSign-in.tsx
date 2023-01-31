import { request } from "../services/axios";

type SignInForm = {
  email: string;
  password: string;
};

export default function useSignIn(body: SignInForm) {
  const signIn = async () => {
    return request.post(`${import.meta.env.VITE_BASE_URL}sign-in`, body);
  };
  return { signIn };
}
