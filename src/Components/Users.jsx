import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function addUser(event) {
    event.preventDefault();
    if (name !== "" && comment !== "") {
      const newUser = { name, comment };
      await axios.post("http://localhost:8080/api/v1/add/user", newUser);
      setName("");
      setComment("");
      navigate("/");
    } else {
      setError("Adding error");
    }
  }
  return (
    <form
      onSubmit={addUser}
      className="mx-auto mt-32 flex w-96 flex-col items-center gap-10 rounded-md bg-white p-24 shadow-md"
    >
      <h1 className="text-2xl text-slate-900">New Report</h1>
      <input
        className="w-56 rounded-md border-2 p-2 shadow-sm hover:shadow-md"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-56 rounded-md border-2 p-2 shadow-sm hover:shadow-md"
        type="text"
        placeholder="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        type="submit"
        className="h-8 rounded-md border border-gray-300 bg-blue-400 p-1 px-4 text-slate-900 shadow-sm transition-shadow hover:bg-blue-600 hover:text-white hover:shadow-md active:bg-blue-800 sm:h-10 sm:w-36"
      >
        Add
      </button>
      <span>{error}</span>
    </form>
  );
}
export default Users;
