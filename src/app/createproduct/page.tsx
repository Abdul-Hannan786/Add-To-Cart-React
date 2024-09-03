"use client";

import { UseProductContext } from "@/Context/ProductContext";
import React, { useState } from "react";

const CreateProduct = () => {
  const { addNewProduct } = UseProductContext();
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState<number>(0);

  const handleStudents = () => {
    const newProduct = {
        name: newName,
        category: newCategory,
        price: newPrice,
        id: crypto.randomUUID()
    }
    addNewProduct(newProduct)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Product Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Product Price"
        value={newPrice}
        onChange={(e) => setNewPrice(Number(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => {handleStudents( )}}>Create Product</button>
    </div>
  );
};

export default CreateProduct;
