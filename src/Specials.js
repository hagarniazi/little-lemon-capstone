import { Link } from "react-router-dom";

const dishes = [
  {
    name: "Greek salad",
    price: "$12.99",
    image: "/icons_assets/greek salad.jpg",
    alt: "Greek salad with feta and vegetables",
    description:
      "Crisp lettuce, peppers, olives and feta, finished with oregano and our house lemon vinaigrette.",
  },
  {
    name: "Bruschetta",
    price: "$8.99",
    image: "/icons_assets/bruchetta.svg",
    alt: "Bruschetta topped with tomatoes and herbs",
    description:
      "Grilled sourdough rubbed with garlic, topped with ripe tomatoes, basil and extra virgin olive oil.",
  },
  {
    name: "Lemon dessert",
    price: "$7.50",
    image: "/icons_assets/lemon dessert.jpg",
    alt: "Lemon dessert with toasted meringue",
    description:
      "Silky lemon custard with a crisp pastry base, toasted meringue and fresh citrus zest.",
  },
];

function Specials() {
  return (
    <section className="section" aria-labelledby="specials-title">
      <div className="section__heading">
        <div>
          <p className="eyebrow">Made with care</p>
          <h2 id="specials-title">This week's specials</h2>
        </div>
        <Link className="button button--secondary" to="/menu">
          Online menu
        </Link>
      </div>

      <div className="card-grid">
        {dishes.map((dish) => (
          <article className="menu-card" key={dish.name}>
            <img src={dish.image} alt={dish.alt} />
            <div className="menu-card__body">
              <div className="menu-card__title">
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <Link to="/order-online">Order for delivery</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
