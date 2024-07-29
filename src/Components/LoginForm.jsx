import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
function LoginForm() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const checkPassword = async (event) => {
    event.preventDefault();
    if (username == "" && password == "") {
      setError("All fields are required");
    }
    try {
      const loginData = { username, password };
      await axios.post("http://localhost:8080/api/v1/login", loginData);
      localStorage.setItem("logged", true);
      login();
      setName("");
      setPassword("");
    } catch (error) {
      setError("Wrong name or password");
    }
  };
  return (
    <form
      onSubmit={checkPassword}
      className="mx-auto mt-32 flex w-96 flex-col items-center gap-10 rounded-md bg-white p-24 shadow-md"
    >
      <h1 className="text-2xl text-slate-900">Login</h1>
      <input
        className="w-56 rounded-md border-2 p-2 shadow-sm hover:shadow-md"
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-56 rounded-md border-2 p-2 shadow-sm hover:shadow-md"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span className="text-md font-semibold text-red-600">{error}</span>
      <button
        type="submit"
        className="h-8 rounded-md border border-gray-300 bg-blue-400 p-1 px-4 text-slate-900 shadow-sm transition-shadow hover:bg-blue-600 hover:text-white hover:shadow-md active:bg-blue-800 sm:h-10 sm:w-36"
      >
        Enter
      </button>
    </form>
  );
}

export default LoginForm;
