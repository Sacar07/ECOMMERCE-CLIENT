import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";

export default function Slug() {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        // console.log("res", res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <Breadcrumb title="Product Details" subtext="pages"/>
      <h1>Slug</h1>
    </div>
  );
}
