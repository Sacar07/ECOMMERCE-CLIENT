import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

export default function Signup() {
  const [formErrors, setFormErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      })
      .then((res) => {
        toast.success("success");
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("bad request");
        setIsLoading(false);
        const errors = err.response.data.errors;
        setFormErrors(errors);
        console.log("form err is", errors);
      });
  }

  return (
    <>
      <Breadcrumb title="My Account" subtext="pages" />
      <div className="container mx-[auto] mt-[120px] h-[474+50px] w-[544px] shadow-[1px_4px_25px_0px_rgba(0,0,0,0.3)]">
        <div className="p-[50px]">
          <p className="px-auto text-center font-josefin text-[32px] font-bold">
            Signup
          </p>
          <p className="text-center font-lato text-[16px] text-[#9096B2]">
            Please signup using account detail below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="form-control mt-[37px] block"
              />

              {formErrors.length !== 0 &&
                formErrors.map((el) => {
                  if (el.param == "name") {
                    return <span className="text-red-500">{el.msg}</span>;
                  }
                })}
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="form-control block"
              />
              {formErrors.length !== 0 &&
                formErrors.map((el) => {
                  if (el.param == "email") {
                    return <span className="text-red-500">{el.msg}</span>;
                  }
                })}
            </div>
            <div className="form-group">
              <input
                name="password"
                placeholder="Password"
                className="form-control block"
                type="password"
              />
              {formErrors.length !== 0 &&
                formErrors.map((el) => {
                  if (el.param == "password") {
                    return <span className="text-red-500">{el.msg}</span>;
                  }
                })}
            </div>
            <div className="form-group">
              <select className="form-control" name="role" id="">
                <option value="">-- select role --</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
              {formErrors.length !== 0 &&
                formErrors.map((el) => {
                  if (el.param == "role") {
                    return <span className="text-red-500">{el.msg}</span>;
                  }
                })}
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="btn mt-[36px] w-full"
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
                "Sign Up"
              )}
            </button>
            <p className="mt-[28px] text-center font-lato text-[17px] text-[#9096B2]">
              Already have an Account?{" "}
              <Link className="text-primary" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <img
        className="mx-auto mt-[110px]"
        src="/assets/login-banner.png"
        alt=""
      />
      <ToastContainer />
    </>
  );
}
