import React from "react";
import "./Breadcrumb.scss";
import homeIcon from "../assets/home.png";

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <img
        src="/images/home.png"
        alt="Home"
        className="breadcrumb__icon"
      />

      <span className="breadcrumb__separator">›</span>

      <span className="breadcrumb__item">Categories</span>

      <span className="breadcrumb__separator">›</span>

      <span className="breadcrumb__item breadcrumb__active">
        Vegetables
      </span>
    </nav>
  );
};

export default Breadcrumb;