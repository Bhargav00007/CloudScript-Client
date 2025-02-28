import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch(
          "https://bhrgvnotesbackend.onrender.com/api/auth/getuser",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token, // Send auth-token in headers
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setUserName(data.name); // Assuming the response contains a `name` field
        } else {
          console.error("Failed to fetch user:", data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName(null);
    navigate("/login");
  };

  return (
    <nav
      className="navbar b navbar-expand-lg"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <b style={{ color: "#728FCE" }}>CloudScript</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/home"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "white" }}>
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">
                Signup
              </Link>
            </form>
          ) : (
            <div className="d-flex align-items-center">
              {userName ? (
                <span className="text-white mx-2">{userName}</span>
              ) : (
                <span className="text-white mx-2">Loading...</span>
              )}
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
