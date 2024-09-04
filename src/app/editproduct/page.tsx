"use client";

import { UseProductContext } from "@/Context/ProductContext";
import { useState } from "react";

const EditProduct = () => {
  const { editedProduct, name, category, price } = UseProductContext();

  const [productName, setProductName] = useState(name);
  const [productCategory, setProductCategory] = useState(category);
  const [productPrice, setProductPrice] = useState<number>(price);

  return (
    <div
      style={{
        width: "99vw",
        height: "94vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow: "0 0 15px lightGrey",
          borderRadius: "10px",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "45px",
        }}
      >
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid lightGray",
          }}
        />
        <input
          type="text"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid lightGray",
          }}
        />
        <input
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid lightGray",
          }}
        />
        <button
          onClick={() => {
            editedProduct(productName, productCategory, productPrice);
          }}
          style={{
            color: "white",
            backgroundColor: "#0283ce",
            border: "none",
            fontWeight: "700",
            fontSize: "15px",
            borderRadius: "5px",
            padding: "12px",
            marginTop: "15px",
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
