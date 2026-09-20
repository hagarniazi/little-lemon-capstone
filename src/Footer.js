import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <img src="/icons_assets/Logo.svg" alt="Little Lemon logo" />
        <p>
          Mediterranean food, Chicago spirit, and a warm table for everyone.
        </p>
        <div className="site-footer__social" aria-label="Social media links">
          <a href="https://www.instagram.com" aria-label="Instagram">
            ◎
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            f
          </a>
          <a href="https://x.com" aria-label="X">
            ×
          </a>
        </div>
      </div>

      <nav className="site-footer__column" aria-label="Footer navigation">
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
        </ul>
      </nav>

      <div className="site-footer__column">
        <h2>Visit us</h2>
        <p>1234 Lemon Street</p>
        <p>Chicago, IL 60614</p>
        <p>Tue-Thu 5-10 PM</p>
        <p>Fri-Sun 12-11 PM</p>
      </div>

      <div className="site-footer__column">
        <h2>Contact</h2>
        <p>(312) 555-0147</p>
        <p>
          <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
        </p>
        <p>Private dining</p>
        <p>Accessibility</p>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 Little Lemon Chicago. All rights reserved.</p>
        <p>
          <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link> ·{" "}
          <Link to="/gift-cards">Gift cards</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
