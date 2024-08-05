import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Breadcrumb from "../components/common/Breadcrumb";

export default function PageNotFound() {
  return (
    <div>
      <Breadcrumb title="404 Not Found" subtext="Pages" />
      
        <img className="mx-auto" src="public/assets/image.png" alt="" />
        <img className="mx-auto mt-[156px] mb-[60px]" src="public/assets/login-banner.png" alt="" />
      
    </div>
  );
}
