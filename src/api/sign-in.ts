import { request } from "../services/axios";

const URL = `${import.meta.env.VITE_BASE_URL}sign-in`;

type Form = {
  email: string;
  password: string;
};

export default function signIn(form: Form) {
  return request.post(URL, form);
}
