import { request } from "../services/axios";

const URL = `${import.meta.env.VITE_BASE_URL}sign-up`;

type Form = {
  email: string;
  username: string;
  picture?: string;
  password: string;
};

export default function signUp(form: Form) {
  if (form.picture === "") {
    const { email, username, password } = form;
    return request.post(URL, { email, username, password });
  }
  return request.post(URL, form);
}
