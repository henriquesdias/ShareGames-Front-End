import { useState } from "react";
import useSignIn from "../hooks/useSign-in";

type AuthProps = {
  setShowAuth: Function;
};

export default function SignIn({ setShowAuth }: AuthProps) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { signIn } = useSignIn({
    email: form.email,
    password: form.password,
  });
  function submitData(event: any) {
    event.preventDefault();
    signIn()
      .then((res) => {
        console.log(res);

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
