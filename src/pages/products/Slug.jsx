import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slice/cartSlice";

export default function Slug() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
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
      <Breadcrumb title="Product Details" subtext="pages" />

      {JSON.stringify(product)}
      <button
        onClick={() => {
          dispatch(addCartItem(product.name));
        }}
        className="btn"
      >
        Add to cart
      </button>
    </div>
  );
}
