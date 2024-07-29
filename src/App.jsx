import Navbar from "./Components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm.jsx";
import Users from "./Components/Users.jsx";
import { useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";
import EditUser from "./Components/EditUser.jsx";
function App() {
  const { isLoggedIn, login } = useContext(AuthContext);
  if (localStorage.getItem("logged") === "true") {
    login();
  }
  return (
    <>
      <main className="bg-gray-200 h-screen">
        <Navbar />
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/edit/:id" element={<EditUser />} />
            </>
          ) : (
            <Route path="/" element={<LoginForm />} />
          )}
        </Routes>
      </main>
    </>
  );
}

export default App;
