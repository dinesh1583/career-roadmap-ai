import { jwtDecode } from "jwt-decode";

function Navbar() {
  const token = localStorage.getItem("token");

  let userEmail = "";

  if (token) {
    const decoded = jwtDecode(token);
    userEmail = decoded.email;
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <h3>AI Career Navigator</h3>

      <div>
        <span>{userEmail}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;