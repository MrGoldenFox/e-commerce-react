import { Product } from "./Product";

export function ProductsList({ products }) {
  return (
    <section className="my-4">
      <h2 className="mb-4">Products Catalog</h2>
      <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <li key={product.id} className="flex">
            <Product
              title={product.title}
              category={product.category}
              dimensions={product.dimensions}
              price={product.price}
              img={product.thumbnail}
              description={product.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
