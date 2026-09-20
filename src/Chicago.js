import { Link } from "react-router-dom";

function Chicago() {
  return (
    <section className="story" id="about" aria-labelledby="story-title">
      <div className="story__content">
        <p className="eyebrow">A table with a story</p>
        <h2 id="story-title">Come hungry, leave happy.</h2>
        <p>
          Little Lemon is a family-owned restaurant where traditional recipes
          meet a modern Chicago spirit. Our kitchen celebrates seasonal produce,
          generous plates and time around the table.
        </p>
        <Link className="button button--secondary" to="/reservations">
          Reserve a table
        </Link>
      </div>
      <img
        className="story__image"
        src="/icons_assets/restaurant.jpg"
        alt="The warm dining room at Little Lemon"
      />
    </section>
  );
}

export default Chicago;
