import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/main-page/logo.png';
import './Header.css';

function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMoreOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMoreOpen(false);
    }, 200);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="RE:FACTORY" className="logo" />
        </Link>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/code-insight" className="nav-link">Code Insight</Link>
            </li>
            <li
              className="nav-item has-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link dropdown-toggle">
                More
                <span className="dropdown-arrow">▼</span>
              </button>
              {isMoreOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/faq" className="dropdown-link">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/community" className="dropdown-link">Community</Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="dropdown-link">Contact Us</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <Link to="/login" className="login-btn">LOGIN</Link>
      </div>
    </header>
  );
}

export default Header;
