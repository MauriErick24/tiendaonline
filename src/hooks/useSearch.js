import { useState } from "react";

const useSearch = (product) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const filterProduct = (value) => {
    setSearchValue(value);
    const filteredProducts = product.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    if (value.trim() !== "") {
      setProductsFiltered(filteredProducts);
    } else {
      setProductsFiltered([]);
    }
  };
  return { productsFiltered, filterProduct, searchValue };
};
export default useSearch;
