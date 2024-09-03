"use client";

import { UseProductContext } from "@/Context/ProductContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { products, deleteProduct, editProduct, addToCart } =
    UseProductContext();
  const router = useRouter();

  return (
    <div style={{ padding: "20px" }}>
      <button
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "#0283ce",
          fontWeight: "700",
          fontSize: "15px",
        }}
        onClick={() => {
          router.push("./createproduct");
        }}
      >
        Add Product
      </button>
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {products.map(({ name, price, category }, index) => (
          <div
            key={name + index}
            style={{
              boxShadow: "0 0 5px lightGrey",
              padding: "20px",
              borderRadius: "10px",
              fontFamily: "sans-serif",
              width: "250px",
            }}
          >
            <h2 style={{ marginTop: "0" }}>Name: {name}</h2>
            <p style={{ fontWeight: "600" }}>Category: {category}</p>
            <p style={{ fontWeight: "600" }}>Price: ${price}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  padding: "10px",
                  color: "white",
                  backgroundColor: "#c02626",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
                onClick={() => {
                  deleteProduct(index);
                }}
              >
                Delete
              </button>
              <button
                style={{
                  padding: "6px",
                  color: "white",
                  backgroundColor: "#0283ce",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
                onClick={() => {
                  editProduct(index);
                }}
              >
                Edit
              </button>
              <button
                style={{
                  padding: "6px",
                  color: "white",
                  backgroundColor: "green",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
                onClick={() => {
                  addToCart(index);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
