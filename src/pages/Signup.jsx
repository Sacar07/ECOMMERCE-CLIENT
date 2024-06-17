import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import axios from "axios";
import {  toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import ErrorMessage from "../components/common/ErrorMessage";
import TogglePassword from "../components/common/TogglePassword";

export default function Signup() {
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
        setIsLoading(false);
        navigate("/login");
        toast.success("Account created");
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          toast.error("bad request");
          const errors = err.response.data.errors;
          let errorObj = {};
          errors.forEach((el) => {
            errorObj[el.param] = el.msg;
          });
          setFormErrors(errorObj);
        } else {
          toast.error("Something went wrong. Please Try Again Later");
        }
        setIsLoading(false);
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
                onChange={() => setFormErrors({ ...formErrors, name: "" })}
              />
              <ErrorMessage msg={formErrors.name} />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="form-control block"
                onChange={() => setFormErrors({ ...formErrors, email: "" })}
              />
              <ErrorMessage msg={formErrors.email} />
            </div>

            <TogglePassword
              onChange={() => setFormErrors({ ...formErrors, password: "" })}
            />
            <ErrorMessage msg={formErrors.password} />
            <div className="form-group">
              <select
                className="form-control"
                name="role"
                id=""
                onChange={() => setFormErrors({ ...formErrors, role: "" })}
              >
                <option value="">-- select role --</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
              <ErrorMessage msg={formErrors.role} />
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
     
    </>
  );
}
