import React from "react";

import { useParams } from "react-router-dom";
function ProductDetails(props) {
  const { id } = useParams();
  const products = [
    { id: 1, name: "iPhone 15" },
    { id: 2, name: "MacBook Pro" },
    { id: 3, name: "iPad Air" },
  ];

  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
