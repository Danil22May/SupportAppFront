import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  async function fetchApi() {
    const response = await axios.get("http://localhost:8080/api/v1/users");
    setUsers(response.data);
  }
  useEffect(() => {
    fetchApi();
  }, []);
  async function deleteUser(index) {
    await axios.delete(`http://localhost:8080/api/v1/delete/${index}`);
    fetchApi();
  }
  function editUser(index) {
    navigate(`/edit/${index}`);
  }
  return (
    <ul>
      {users.map((item, index) => (
        <li
          className="border rounded-lg shadow-md bg-white m-4 p-4"
          key={index}
        >
          <div className="font-semibold">Name: {item.name}</div>
          <div>Comment: {item.comment}</div>
          <button
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={() => deleteUser(item.id)}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 text-white m-2 p-2 rounded-md"
            onClick={() => editUser(item.id)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}
