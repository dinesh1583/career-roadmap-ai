function Navbar() {
  const logout = () => {
    localStorage.removeItem("user");

    // ✅ Redirect after logout
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <h3>AI Career Navigator</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;