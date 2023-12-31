import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return <>
    <div className="container mt-5 w-100 d-flex jud=stify-content-center align-item-center h-75 sc">
      <div className="row h-100 d-flex align-items-center  ">
        <div className="col-lg-8 custom">
          <h1 className="display-4 mb-4">Welcome to RK-Blog</h1>
          <p className="lead">
            Explore a world of insightful blogs and stay updated with the latest
            trends. Join our community of passionate writers and readers.
          </p>
          <p>
            Whether you're here to share your thoughts or discover new ideas,
            RK-Blog is the perfect platform for every blogger.
          </p>
          <Link to="/Blogs" className="btn btn-primary btn-lg m-2">
            Explore Blogs
          </Link>
          <Link to="/Contact" className="btn btn-outline-dark btn-lg m-2">
            Contact Us
          </Link>
        </div>
        <div className="col-lg-4 d-flex align-items-center">
          <img
            src="https://rk-storeplace.netlify.app/asset/img/logo.jpg"
            alt="Blog Image"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>

  </>;
};
