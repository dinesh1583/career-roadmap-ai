import { jwtDecode } from "jwt-decode";

function Profile() {
  const token = localStorage.getItem("token");

  let user = {};

  if (token) {
    user = jwtDecode(token);
  }

  return (
    <div className="page">
      <h2>Profile Page</h2>

      <p><strong>Email:</strong> {user.email}</p>

      <p>More user details coming soon...</p>
    </div>
  );
}

export default Profile;