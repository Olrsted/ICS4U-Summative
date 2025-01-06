import "./Header.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useStoreContext } from "../context";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { loggedIn, setLoggedIn, firstName, defaultGenre } = useStoreContext();

function logout() {
  navigate("/");
  setLoggedIn(false);
}

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src="/src/imgs/netPix logo.png" alt="Netpix Logo" className="LogoI" />
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li
              className={`menu-list-item ${isActive("/movies") ? "active" : ""}`}
              onClick={() => navigate("/movies")}
            >
              Movies
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <form aria-label="Search the site">
            <input className="search-input" type="search" placeholder="Search..." />
            <button type="submit" aria-label="Search">
              <i className="search-icon fa fa-search"></i>
            </button>
          </form>
        </div>

        {loggedIn ? (
          <div>
            <button onClick={() => navigate("/cart")}>Cart</button>
            <button onClick={() => navigate("/settings")}>Settings</button>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => navigate("/login")}>Sign In</button>
            <button onClick={() => navigate("/register")}>Sign Up</button>
          </div>
        )}

      </div >
      {loggedIn ? (
        <h1>Hello, {firstName}!</h1>
      ) : (
        <></>
      )}
      </div>

    
  );
}

export default Header;
