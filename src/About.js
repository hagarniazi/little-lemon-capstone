function About() {
  return (
    <div className="page-shell">
      <section className="page-intro" aria-labelledby="about-title">
        <p className="eyebrow">Our story</p>
        <h1 id="about-title">About Little Lemon</h1>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant in Chicago,
          serving generous food and a warm welcome at every table.
        </p>
      </section>

      <section className="story about-story" aria-labelledby="welcome-title">
        <div className="story__content">
          <h2 id="welcome-title">A neighborhood table</h2>
          <p>
            We created Little Lemon as a place for friends, families, and
            neighbors to slow down together. Our dining room is relaxed and
            bright, with the kind of hospitality that makes a quick meal feel
            like a shared occasion.
          </p>
          <p>
            From familiar Mediterranean flavors to new favorites, every plate
            is made to be passed around and enjoyed together.
          </p>
        </div>
        <img
          className="story__image"
          src="/icons_assets/restaurant.jpg"
          alt="The welcoming dining room at Little Lemon"
        />
      </section>

      <section className="about-columns" aria-label="The Little Lemon experience">
        <article className="about-panel">
          <h2>Fresh at the heart</h2>
          <p>
            We choose bright produce, fragrant herbs, quality olive oil, and
            ingredients that let the food taste like itself. Our menu follows
            the simple pleasure of fresh preparation and thoughtful seasoning.
          </p>
        </article>
        <article className="about-panel">
          <h2>Made for gathering</h2>
          <p>
            Whether you are joining us for a weeknight dinner or a long lunch,
            expect easy conversation, welcoming service, and a meal that leaves
            room for one more story.
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;