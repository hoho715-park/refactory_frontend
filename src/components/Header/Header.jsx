import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/main-page/logo.png';
import './Header.css';

function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="RE:FACTORY" className="logo" />
        </Link>

        <button className="hamburger-btn" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={closeMobileMenu}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/code-insight" className="nav-link" onClick={closeMobileMenu}>Code Insight</Link>
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
                    <Link to="/faq" className="dropdown-link" onClick={closeMobileMenu}>FAQ</Link>
                  </li>
                  <li>
                    <Link to="/community" className="dropdown-link" onClick={closeMobileMenu}>Community</Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="dropdown-link" onClick={closeMobileMenu}>Contact Us</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item mobile-login">
              <Link to="/login" className="login-btn" onClick={closeMobileMenu}>LOGIN</Link>
            </li>
          </ul>
        </nav>

        <Link to="/login" className="login-btn desktop-login">LOGIN</Link>
      </div>
    </header>
  );
}

export default Header;
