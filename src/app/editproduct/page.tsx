"use client";

import { UseProductContext } from "@/Context/ProductContext";
import { useState } from "react";

const EditProduct = () => {
  const { editedProduct, name, category, price } = UseProductContext();

  const [productName, setProductName] = useState(name);
  const [productCategory, setProductCategory] = useState(category);
  const [productPrice, setProductPrice] = useState<number>(price);

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={productPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />
      <br />
      <br />
      <button
        onClick={() => {
          editedProduct(productName, productCategory, productPrice);
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProduct;
