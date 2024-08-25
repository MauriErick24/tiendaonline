import React from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";
import Spinner from "../components/Spinner";
import Searcher from "../components/Searcher";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const { product } = useOutletContext();

  const { productsFiltered, searchValue, filterProduct } = useSearch(product);

  if (product.length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="header center">
        <Searcher searchValue={searchValue} setSearchValue={filterProduct} />
      </div>
      <p className="landing__title">
        ESCOGE LO QUE QUIERAS,{" "}
        <span className="span--primary">DESDE DONDE SEA.</span>
      </p>
      <div className="home">
        {productsFiltered.length !== 0
          ? productsFiltered.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : product.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
      </div>
    </div>
  );
};

export default Home;
