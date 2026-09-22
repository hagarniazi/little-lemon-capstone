const menuSections = [
  {
    title: "Starters",
    items: [
      ["Greek salad", "Crisp greens, peppers, olives, feta, and lemon vinaigrette.", "$12.99"],
      ["Bruschetta", "Grilled sourdough with tomatoes, basil, garlic, and olive oil.", "$8.99"],
      ["Roasted hummus", "Creamy chickpeas with warm spices, herbs, and toasted pita.", "$9.50"],
    ],
  },
  {
    title: "Main Courses",
    items: [
      ["Lemon herb chicken", "Tender chicken, roasted vegetables, and fragrant couscous.", "$19.50"],
      ["Mediterranean pasta", "Seasonal vegetables, feta, herbs, and tomato olive sauce.", "$17.99"],
      ["Grilled sea bass", "A delicate fillet with lemon, greens, and golden potatoes.", "$23.00"],
    ],
  },
  {
    title: "Desserts",
    items: [
      ["Lemon dessert", "Silky lemon custard, crisp pastry, and toasted meringue.", "$7.50"],
      ["Baklava", "Flaky pastry layered with nuts, honey, and a touch of citrus.", "$6.50"],
    ],
  },
  {
    title: "Drinks",
    items: [
      ["House lemonade", "Fresh lemon, mint, and sparkling water served over ice.", "$4.50"],
      ["Cucumber cooler", "Cucumber, citrus, and herbs with a refreshing finish.", "$5.50"],
    ],
  },
];

function MenuItem({ item }) {
  return (
    <article className="menu-list-item">
      <div className="menu-card__title">
        <h3>{item[0]}</h3>
        <span>{item[2]}</span>
      </div>
      <p>{item[1]}</p>
    </article>
  );
}

function Menu() {
  return (
    <div className="page-shell">
      <section className="page-intro" aria-labelledby="menu-title">
        <p className="eyebrow">From our kitchen</p>
        <h1 id="menu-title">Our Menu</h1>
        <p>Bright Mediterranean flavors, prepared with care for the whole table.</p>
      </section>

      <div className="menu-sections">
        {menuSections.map((section) => (
          <section className="menu-section" key={section.title} aria-labelledby={`${section.title}-title`}>
            <h2 id={`${section.title}-title`}>{section.title}</h2>
            <div className="menu-list">
              {section.items.map((item) => <MenuItem item={item} key={item[0]} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Menu;