import { FormEvent, useState } from "react";
import signUp from "../api/sign-up";

type AuthProps = {
  setShowAuth: Function;
};

export default function SignUp({ setShowAuth }: AuthProps) {
  const [form, setForm] = useState({
    email: "",
    username: "",
    picture: "",
    password: "",
    confirmPassword: "",
  });
  function submitData(event: FormEvent) {
    event.preventDefault();
    const { email, username, picture, password } = form;
    signUp({ email, username, picture, password })
      .then(() => setShowAuth(false))
      .catch((res) => console.log(res));
  }
  return (
    <form onSubmit={submitData}>
      <input
        type="email"
        value={form.email}
        placeholder="Email"
        name="email"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        required
      />
      <input
        type="text"
        name="username"
        value={form.username}
        placeholder="Username"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        required
      />
      <input
        type="text"
        value={form.picture}
        placeholder="Picture"
        name="picture"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <input
        type="password"
        value={form.password}
        placeholder="Password"
        name="password"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        required
      />
      <input
        type="password"
        value={form.confirmPassword}
        placeholder="Confirm your password"
        name="confirmPassword"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        required
      />
      <button type="submit">Sign-up</button>
    </form>
  );
}
