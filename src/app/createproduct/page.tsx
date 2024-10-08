"use client";

import { UseProductContext } from "@/Context/ProductContext";
import React, { useState } from "react";

const CreateProduct = () => {
  const { addNewProduct } = UseProductContext();
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState<string>("");

  const handleStudents = () => {
    const parsedPrice = parseFloat(newPrice);

    if (
      newName.trim() === "" ||
      newCategory.trim() === "" ||
      isNaN(parsedPrice) ||
      parsedPrice <= 0
    ) {
      return alert("Please add the required information and ensure price is a positive number");
    } else {
      const newProduct = {
        id: crypto.randomUUID(),
        name: newName,
        category: newCategory,
        price: parsedPrice,
      };
      addNewProduct(newProduct);
    }
  };

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
          boxShadow: "0 0 15px lightGray",
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
          placeholder="Enter Product Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid lightGray",
          }}
        />
        <input
          type="text"
          placeholder="Enter Product Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid lightGray",
          }}
        />
        <input
          type="number"
          placeholder="Enter Product Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid lightGray",
          }}
        />
        <button
          onClick={() => {
            handleStudents();
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
          Create Product
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
