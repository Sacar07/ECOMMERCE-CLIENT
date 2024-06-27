import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SellerProducts() {
  let token = localStorage.getItem("token");
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {});
  }, []);

  return <>{JSON.stringify(products)}</>;
}
