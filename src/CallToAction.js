import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Family-owned Mediterranean dining</p>
        <h1 id="hero-title">Little Lemon</h1>
        <p className="hero__location">Chicago</p>
        <p className="hero__lead">
          Fresh, vibrant dishes and warm hospitality in the heart of Chicago.
          Join us for a meal made with care.
        </p>
        <Link className="button button--primary" to="/reservations">
          Reserve a table
        </Link>
      </div>
      <img
        className="hero__image"
        src="/icons_assets/restauranfood.jpg"
        alt="A table filled with colorful Mediterranean dishes"
      />
    </section>
  );
}

export default CallToAction;
