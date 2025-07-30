const FAKE_API = "https://dummyjson.com";

export const productsService = async () => {
  const res = await fetch(`${FAKE_API}/products`);
  const data = await res.json();

  return data.products;
};
