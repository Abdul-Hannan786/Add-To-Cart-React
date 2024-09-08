"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const productsData = [
  {
    id: crypto.randomUUID(),
    name: "Macbook",
    category: "Laptop",
    price: 3500,
  },
  {
    id: crypto.randomUUID(),
    name: "Iphone",
    category: "Mobile Phone",
    price: 1500,
  },
  {
    id: crypto.randomUUID(),
    name: "Airpods",
    category: "Gadgets",
    price: 200,
  },
];

type ProductType = {
  id: string;
  name: string;
  category: string;
  price: number | string;
  quantity?: number;
  totalPrice?: number | string;
};

type ProductContextType = {
  products: ProductType[];
  deleteProduct: (index: number) => void;
  editProduct: (index: number) => void;
  editedProduct: (
    editedName: string,
    editedCategory: string,
    editedPrice: number | string
  ) => void;
  addNewProduct: (newProduct: ProductType) => void;
  addToCart: (index: number) => void;
  name: string;
  category: string;
  price: number | string;
};

const ProductContext = createContext<ProductContextType>({
  products: [],
  deleteProduct: () => {},
  editProduct: () => {},
  editedProduct: () => {},
  addNewProduct: () => {},
  addToCart: () => {},
  name: "",
  category: "",
  price: "",
});

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>(productsData);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [editIndex, setEditIndex] = useState<null | number>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number| string>("");

  const router = useRouter();

  const deleteProduct = (index: number) => {
    const cloneProduct = [...products];
    cloneProduct.splice(index, 1);
    setProducts([...cloneProduct]);
    if (editIndex !== null && editIndex >= cloneProduct.length) {
      setEditIndex(null);
    }
  };

  const editProduct = (index: number) => {
    setEditIndex(index);
    router.push("./editproduct");
  };

  const editedProduct = (
    editedName: string,
    editedCategory: string,
    editedPrice: number | string
  ) => {
    if (editIndex !== null && editIndex < products.length) {
      const cloneStudents = [...products];
      cloneStudents[editIndex] = {
        ...cloneStudents[editIndex],
        name: editedName,
        category: editedCategory,
        price: editedPrice,
      };
      setProducts(cloneStudents);
      router.push("/");
    }
  };

  const addNewProduct = (newProduct: ProductType) => {
    router.push("/");
    setProducts([...products, newProduct]);
  };

  const addToCart = (index: number) => {
    const product = products[index];
    const existingIndex = cart.findIndex(({ id }) => id === product.id);
    if (existingIndex !== -1) {
      const cloneCart = [...cart];
      const cloneCartProduct = cloneCart[existingIndex];
      cloneCartProduct.quantity = (cloneCartProduct.quantity || 1) + 1;
      cloneCartProduct.totalPrice =
        cloneCartProduct.quantity * Number(cloneCartProduct.price);
      setCart(cloneCart);
    } else {
      setCart([...cart, {...product, quantity: 1, totalPrice: product.price}])
    }
  };

  useEffect(() => {
    if (editIndex !== null && editIndex < products.length) {
      setName(products[editIndex].name);
      setCategory(products[editIndex].category);
      setPrice(products[editIndex].price);
    } else {
      setName("");
      setCategory("");
      setPrice("");
    }
    console.log(cart);
  }, [editIndex, products, cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        deleteProduct,
        editProduct,
        editedProduct,
        addNewProduct,
        addToCart,
        name,
        category,
        price,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

export const UseProductContext = () => useContext(ProductContext);
