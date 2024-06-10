import { React, useState } from "react";
import {
  CiHeart,
  CiMail,
  CiPhone,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    console.log("toggle menu");
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      <div className="bg-primary">
        <nav className="py-[14px] text-center font-josefin leading-[30px] text-white md:container md:flex md:justify-between  ">
          <div className="md:flex md:gap-12 ">
            <p>
              {" "}
              <CiMail className="inline-block" /> mhhasanul@gmail.com
            </p>

            <p className=" md:inline-block">
              <CiPhone className="inline-block" /> (12345)67890
            </p>
          </div>
          <div className="md:flex md:gap-4">
            <div className="hidden md:flex md:gap-4">
              <span>
                <select className="bg-inherit">
                  <option className="bg-[#7E33E0]" value="eng">
                    English
                  </option>
                  <option className="bg-[#7E33E0]" value="eng">
                    Nepali
                  </option>
                  <option className="bg-[#7E33E0] " value="eng">
                    Indian
                  </option>
                </select>
              </span>
              <span>
                <select className="bg-inherit">
                  <option className="bg-[#7E33E0] " value="usd">
                    USD
                  </option>
                  <option className="bg-[#7E33E0] " value="nrs">
                    NRS
                  </option>
                  <option className="bg-[#7E33E0] " value="ic">
                    IC
                  </option>
                </select>
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <p>
                {" "}
                <Link to="/login">
                  Login <CiUser className="inline-block" />
                </Link>
              </p>
              <span className="hidden sm:inline-block">
                Wishlist
                <CiHeart className="inline-block" />
              </span>
              <p>
                <CiShoppingCart className="inline-block" />
              </p>
            </div>
          </div>
        </nav>
      </div>
      <nav className="container   w-full pb-[12px] pt-[18px] sm:flex sm:justify-between">
        <div className="flex w-full items-center justify-between md:gap-[90px] lg:w-auto">
          <Link
            to="/"
            className="leading-auto font-josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
          >
            Hekto
          </Link>
          <div
            className={`fixed bottom-0 right-0 top-0 z-20 w-[50%] bg-secondary leading-10  transition-all ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} flex flex-col p-12 md:static md:z-0 md:w-auto md:flex-row md:gap-[35px] md:bg-transparent md:p-0`}
          >
            <button
              className="absolute left-2 top-2 text-3xl md:hidden"
              onClick={toggleMenu}
            >
              <IoClose />
            </button>
            <Link to="/" className=" hover:text-primary">
              Home
            </Link>
            <a className=" hover:text-primary" href="">
              Pages
            </a>
            <Link to="/products" className=" hover:text-primary" href="">
              Products
            </Link>
            <a className=" hover:text-primary" href="">
              Blog{" "}
            </a>
            <a className=" hover:text-primary" href="">
              Shop
            </a>
            <a className=" hover:text-primary" href="">
              Contact
            </a>
          </div>

          <IoMenu onClick={toggleMenu} className="text-3xl md:hidden" />
        </div>
        <div
          onClick={toggleMenu}
          className={`fixed inset-0 bottom-0 left-0 top-0 z-10 w-full bg-gray-950 bg-opacity-65 transition-all   ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:bg-transparent `}
        ></div>

        <form className="hidden lg:flex">
          <input
            className="border border-primary-light focus:border-secondary focus:outline-none"
            type="text"
            px-4
            py-2
          />
          <button className="bg-secondary px-3">
            <FaSearch className=" text-white " />
          </button>
        </form>
      </nav>
    </header>
  );
}
