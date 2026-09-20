const testimonials = [
  {
    name: "Maya R.",
    role: "Neighborhood regular",
    image: "/icons_assets/Mario and Adrian A.jpg",
    review:
      "The Greek salad tastes like summer. Thoughtful service and a room that makes you want to stay.",
  },
  {
    name: "Daniel K.",
    role: "Local diner",
    image: "/icons_assets/Mario and Adrian b.jpg",
    review:
      "Our favorite date-night spot in Chicago. The bruschetta and lemon dessert are non-negotiable.",
  },
  {
    name: "Amelia S.",
    role: "Food writer",
    image: "/icons_assets/restaurant chef B.jpg",
    review:
      "Fresh, bright flavors and true hospitality. It feels polished without losing its family soul.",
  },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="section__heading section__heading--centered">
        <div>
          <p className="eyebrow">From our guests</p>
          <h2 id="testimonials-title">A little love for Little Lemon</h2>
        </div>
      </div>
      <div className="card-grid card-grid--reviews">
        {testimonials.map((testimonial) => (
          <article className="review-card" key={testimonial.name}>
            <p className="review-card__stars" aria-label="5 out of 5 stars">
              ★★★★★
            </p>
            <img
              className="review-card__image"
              src={testimonial.image}
              alt={`${testimonial.name} at Little Lemon`}
            />
            <p>{testimonial.review}</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
