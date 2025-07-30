import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Store } from "./pages/Store";
import { Header } from "./components/Header";
import { productsService } from "./services/productService";
import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await productsService();
      setProducts(data);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (value.length === 0) return setFilteredProducts(products);

    const timeout = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredProducts(filtered);
    }, 200);

    return () => clearTimeout(timeout);
  }, [value, products]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="px-[5vw] py-2.5 md:pt-5">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={filteredProducts}
                  value={value}
                  setValue={setValue}
                />
              }
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/store"
              element={<Store products={products} />}
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
