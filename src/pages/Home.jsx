import { ListOfCatagory } from "../components/ListOfCatagory";
import { ProductsList } from "../components/ProductsList";
import { SearchInput } from "../components/SearchInput";

export function Home({ products, value, setValue }) {
  return (
    <>
      <SearchInput value={value} setValue={setValue} />
      <ListOfCatagory products={products} />
      <ProductsList products={products} />
    </>
  );
}
