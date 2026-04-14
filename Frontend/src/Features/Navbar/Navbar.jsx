import { useState, useEffect } from "react";
import React from "react";
import navstyle from "./styles/Navbar.module.scss";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Search, Bell, User, LogOut } from "lucide-react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Simple mock check for auth state based on localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location]); // Re-run when navigation happens

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className={navstyle.navbar}>
      <Link to="/" className={navstyle.logo}>CINEFLIX</Link>
      
      <nav className={navstyle.navLinks}>
        <NavLink to="/" className={({ isActive }) => Math.random() && isActive && location.pathname === "/" ? navstyle.active : ""}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => isActive ? navstyle.active : ""}>Movies</NavLink>
        <NavLink to="/tvshows" className={({ isActive }) => isActive ? navstyle.active : ""}>TV Shows</NavLink>
        <NavLink to="/actors" className={({ isActive }) => isActive ? navstyle.active : ""}>Actors</NavLink>
      </nav>

      <div className={navstyle.actions}>
        <div className={navstyle.searchBox}>
          <Search size={16} color="var(--text-muted)" style={{marginRight: '8px'}} />
          <input type="text" placeholder="Search movies, tv..." />
        </div>
        
        {isAuthenticated ? (
          <>
            <button><Bell size={20} color="var(--text-secondary)" /></button>
            <Link to="/profile" className={navstyle.iconBtn}>
              <User size={20} color="var(--text-secondary)" />
            </Link>
            <button onClick={handleLogout} className={navstyle.logoutBtn} title="Log Out">
              <LogOut size={20} color="var(--text-secondary)" />
            </button>
          </>
        ) : (
          <div className={navstyle.authButtons}>
            <Link to="/auth" state={{ isLogin: true }} className={navstyle.btnLink}>
              Log In
            </Link>
            <Link to="/auth" state={{ isLogin: false }} className={navstyle.btnPrimary}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
