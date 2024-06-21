import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import TogglePassword from "../components/common/TogglePassword";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { toast } from "react-toastify";
import ErrorMessage from "../components/common/ErrorMessage";
import { setUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "b@b.com",
    password: "password",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        setIsLoading(false);
        toast.success("Success");
        // console.log("userrr", res.data.user);
        dispatch(setUser(res.data.user));
        navigate("/");
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
        } else if (err.response?.status === 401) {
          toast.error("invalid credentials");
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
            Login
          </p>
          <p className="text-center font-lato text-[16px] text-[#9096B2]">
            Please login using account detail below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={formData.email}
                placeholder="Email Address"
                className="form-control mt-[37px] block"
              />
              <ErrorMessage msg={formErrors.email} />
            </div>
            <TogglePassword value={formData.password} />
            <ErrorMessage msg={formErrors.password} />
            <p className="mt-[13px] font-lato text-[17px] text-[#9096B2]">
              Forgot your password?
            </p>
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
                "Sign In"
              )}
            </button>
            <p className="mt-[28px] text-center font-lato text-[17px] text-[#9096B2] ">
              Don’t have an Account?{" "}
              <Link className="text-primary" to={"/signup"}>
                {" "}
                Create account
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
