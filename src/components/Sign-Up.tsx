import { FormEvent, useState } from "react";
import signUp from "../api/sign-up";

interface AuthProps {
  setShowAuth: Function;
}

export default function SignUp({ setShowAuth }: AuthProps) {
  const [warning, setWarning] = useState<string>("");
  const [form, setForm] = useState({
    email: "",
    username: "",
    picture: "",
    password: "",
    confirmPassword: "",
  });
  function submitData(event: FormEvent) {
    event.preventDefault();
    setWarning("");
    const { email, username, picture, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      setWarning("The passwords must be equal");
      return;
    }
    signUp({ email, username, picture, password })
      .then(() => setShowAuth(false))
      .catch(({ response }) => {
        if (response.status === 409) {
          setWarning(response.data);
        }
        setWarning("Error. Please, try again later");
      });
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
        placeholder="Password (Minimum 8)"
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
      <div>{warning}</div>
      <button type="submit">Sign-up</button>
    </form>
  );
}
