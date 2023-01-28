import { request } from "../services/axios";

type SignUpForm = {
  email: string;
  username: string;
  picture?: string;
  password: string;
};

export default function useSignUp(body: SignUpForm) {
  const signUp = async () => {
    return request.post(`${import.meta.env.VITE_BASE_URL}sign-up`, body);
  };
  return { signUp };
}
