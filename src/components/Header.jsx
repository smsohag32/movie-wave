import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 default-container">
      <div className="flex-1">
        <Link to="/">MovieWave</Link>
      </div>
      <div className="flex-none gap-6">
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn text-pink-500" : "btn btn-ghost"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn text-pink-500" : "btn btn-ghost"
          }
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
