import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const products = [
    { id: 1, name: "iPhone 15" },
    { id: 2, name: "MacBook Pro" },
    { id: 3, name: "iPad Air" },
  ];
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((value) => {
          return (
            <li>
              <Link to={`/products/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
