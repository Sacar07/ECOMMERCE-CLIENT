import React, { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/common/ErrorMessage";

export default function AddProducts() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({});
  function handleChange(e) {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    setFormErrors({});
    const token = localStorage.getItem("token");
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://ecommerce-sagartmg2.vercel.app/api/products",
        {
          name: formData.name,
          price: formData.price,
          image: formData.image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      )
      .then((res) => {
        setIsLoading(false);
        toast.success("Success");
        console.log("userrr", res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          let errors = err.response.data.errors;
          toast.error("Bad Request");
          let errObj = {};
          errors.forEach((el) => {
            errObj[el.param] = el.msg;
          });
          setFormErrors(errObj);
        } else if (!token) {
          toast.error("User not logged in");
        } else if (err.response.status === 403) {
          toast.error("Forbidden: buyer can not add product");
        } else if (err.response.status === 404) {
          toast.error("Something went wrong!");
        }
      });
    setIsLoading(false);
  }
  return (
    <>
      <Breadcrumb title="Add Product" subtext="pages" />
      <div className="container mx-[auto] mt-[120px] h-[474+50px] w-[544px] shadow-[1px_4px_25px_0px_rgba(0,0,0,0.3)]">
        <div className="p-[50px]">
          <p className="px-auto text-center font-josefin text-[32px] font-bold">
            Add Product
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-control mt-[37px] block"
              />
              <ErrorMessage msg={formErrors.name} />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="form-control mt-[37px] block"
              />
              <ErrorMessage msg={formErrors.price} />
            </div>
            <div className="form-group">
              <input
                type="file"
                name="image"
                // value={formData.price}
                onChange={handleChange}
                placeholder="image"
                className="form-control mt-[37px] block"
              />
              <ErrorMessage msg={formErrors.image} />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn mt-[36px] w-full  "
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="white"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                "Add Item"
              )}
            </button>
          </form>
        </div>
      </div>
      <img
        className="mx-auto mt-[110px]"
        src="/assets/login-banner.png"
        alt=""
      />
    </>
  );
}
