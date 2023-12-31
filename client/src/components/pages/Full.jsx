// Full.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Full = () => {
  const location = useLocation();
  const {
    title,
    author,
    authorEmail,
    content,
    publishDate,
    coverImage,
    additionalFileLink,
  } = location.state || {};

  const handleDownload = () => {
    console.log("Downloading additional file:", additionalFileLink);
  };
  return (
    <div className="nftmain">
      <div className="nft2 sc">
        <div className="main2 d-flex align-item-center justify-content-center row">
          <div className="col-md-7 m-3 d-flex align-item-center justify-content-end imgcont">
            <img
              className="col-md-12 fullimg"
              src={coverImage}
              alt={`Cover for ${title}`}
            />
          </div>
          <div className="col-md-4 m-3">
            <p className="col-md-12 text-primary">◷ {publishDate}</p>
            <p className="col-md-12 text-warning">By: {author}</p>
            <p className="col-md-12 text-danger">@ {authorEmail}</p>
            <a
              href={additionalFileLink}
              download
              className="btn btn-primary col-md-5 col-md-9"
              onClick={handleDownload}
            >
              Download Additional File
            </a>
          </div>

          <hr />
          <div className="text text-center">
            <h4 className="text-primary">{title}</h4>
            <p className="description">{content}</p>
          </div>

          <div className="creator p-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Full;
