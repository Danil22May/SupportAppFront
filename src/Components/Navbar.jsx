import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <nav className="flex bg-white p-4 px-24 text-center text-gray-600 shadow sm:justify-end sm:text-lg">
      <ul className="flex gap-2 sm:gap-12">
        <li className="rounded-md border border-gray-400 bg-gray-100 p-1 px-2 shadow-md hover:bg-primary hover:text-white hover:shadow-xl">
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="rounded-md border border-gray-400 bg-gray-100 p-1 px-2 shadow-md hover:bg-primary hover:text-white hover:shadow-xl">
              <button onClick={logout}>Logout</button>
            </li>
            <li className="rounded-md border border-gray-400 bg-gray-100 p-1 px-2 shadow-md hover:bg-primary hover:text-white hover:shadow-xl">
              <Link to="/users">Add</Link>
            </li>
          </>
        ) : (
          <li className="rounded-md border border-gray-400 bg-gray-100 p-1 px-2 shadow-md hover:bg-primary hover:text-white hover:shadow-xl">
            <Link to="/">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;
