import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <Link to ="/">Homepage</Link>
        <Link to ="/register">Register</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/profile">Profile</Link>
    </nav>
  );
}