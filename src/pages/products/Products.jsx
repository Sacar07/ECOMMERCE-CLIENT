import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(null);
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {});
  }, []);

  return <div>{JSON.stringify(products)}</div>;
}
