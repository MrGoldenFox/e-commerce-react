import { useState } from "react";

export function ListOfCatagory({ products }) {
  const [selectedCategories, setSelectedCategories] = useState([])

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <section className="pt-2">
      <ul className="flex gap-1 flex-wrap">
        {categories.map((category) => (
          <li key={category}>
            <button className="bg-accent text-white py-1.5 px-3 rounded-2xl">{category}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}