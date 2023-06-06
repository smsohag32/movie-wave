import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 default-container">
      <div className="flex-1">
        <Link to="/">MovieWave</Link>
      </div>
      <div className="flex-none">
        <NavLink to="/" className="btn btn-square btn-ghost">
          Home
        </NavLink>
        <NavLink to="/login" className="btn btn-square btn-ghost">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
