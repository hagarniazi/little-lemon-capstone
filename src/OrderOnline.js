import { useState } from "react";

const dishes = [
  ["Greek salad", "Crisp greens, feta, olives, and lemon vinaigrette.", "$12.99"],
  ["Lemon herb chicken", "Roasted vegetables and fragrant couscous.", "$19.50"],
  ["Bruschetta", "Grilled sourdough with tomatoes, basil, and garlic.", "$8.99"],
  ["Lemon dessert", "Silky lemon custard with toasted meringue.", "$7.50"],
];

function OrderOnline() {
  const [addedItem, setAddedItem] = useState("");

  return (
    <div className="page-shell">
      <section className="page-intro" aria-labelledby="order-title">
        <p className="eyebrow">Bring Little Lemon home</p>
        <h1 id="order-title">Order Online</h1>
        <p>Choose a favorite dish for your next Little Lemon meal.</p>
      </section>

      <section className="order-grid" aria-label="Available dishes">
        {dishes.map((dish) => (
          <article className="order-card" key={dish[0]}>
            <div className="menu-card__title">
              <h2>{dish[0]}</h2>
              <span>{dish[2]}</span>
            </div>
            <p>{dish[1]}</p>
            <button className="button button--primary" type="button" onClick={() => setAddedItem(dish[0])}>
              Add to order
            </button>
          </article>
        ))}
      </section>

      <p className="order-note" role="status">
        {addedItem ? `${addedItem} added for this demo.` : "Online ordering is a front-end demo; no payment is collected."}
      </p>
    </div>
  );
}

export default OrderOnline;