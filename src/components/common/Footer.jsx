import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-[532px] mt-[145px] w-full bg-[#EEEFFB]">
        <div className="container flex justify-between pt-[95px]">
          <div>
            <span className="font-josefin text-[38px] font-bold">Hekto</span>
            <div className="pt-[30px]">
              <input
                className="px-4 py-3"
                placeholder="Enter Email Address"
                type="email"
              />{" "}
              <button className="btn py-3 ">Sign Up</button>
            </div>
            <div className="pt-[25px] text-[#9196AA]">
              <p>Contact Info</p>
              <p>29 Ghattekulo, Kathmandu, Bagmati, Nepal</p>
            </div>
          </div>

          <div>
            <span className="font-josefin text-[22px] font-bold">
              Categories
            </span>
            <div className="pt-[30px] text-[#9196AA]">
              <ul className="space-y-3">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="font-josefin text-[22px] font-bold">
              Customer Care
            </span>
            <div className="pt-[30px] text-[#9196AA]">
              <ul className="space-y-3">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Orders Tracking</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="font-josefin text-[22px] font-bold">Pages</span>
            <div className="pt-[30px] text-[#9196AA]">
              <ul className="space-y-3">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around bg-[#E7E4F8] py-[18px]">
        <p className="font-lato font-semibold text-[#9196AA]">
          ©Webecy - All Rights Reserved
        </p>
        <div className="flex gap-[10px]">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
}
