import { useState, useContext, FormEvent } from "react";

import signIn from "../api/sign-in";
import { UserContext } from "../context/User-Context";

type AuthProps = {
  setShowAuth: Function;
};

export default function SignIn({ setShowAuth }: AuthProps) {
  const { setToken } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function submitData(event: FormEvent) {
    event.preventDefault();
    signIn(form)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        setToken(token);
        setShowAuth(false);
      })
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
        type="password"
        value={form.password}
        placeholder="Password"
        name="password"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        required
      />
      <button type="submit">Sign-in</button>
    </form>
  );
}
