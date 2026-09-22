import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <button
        className="site-nav__toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-controls="primary-navigation-links"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">☰</span>
      </button>
      <ul
        id="primary-navigation-links"
        className={isOpen ? "site-nav__links site-nav__links--open" : "site-nav__links"}
      >
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        <li>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
        </li>

        <li>
          <Link to="/reservations" onClick={closeMenu}>Reservations</Link>
        </li>

        <li>
          <Link to="/order-online" onClick={closeMenu}>Order Online</Link>
        </li>

        <li>
          <Link to="/login" onClick={closeMenu}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
