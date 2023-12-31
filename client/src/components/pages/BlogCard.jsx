import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  title,
  author,
  authorEmail,
  content,
  publishDate,
  coverImage,
  additionalFileLink,
}) => {
  const navigate = useNavigate(); // Use useNavigate directly in the component

  const handleDownload = () => {
    console.log("Downloading additional file:", additionalFileLink);
  };

  const gotofull = () => {
    navigate("/Full", {
      state: {
        title,
        author,
        authorEmail,
        content,
        publishDate,
        coverImage,
        additionalFileLink,
      },
    });
  };

  // Function to get the first 8 words of the content
  const getShortenedContent = () => {
    const words = content.split(" ");
    return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
  };

  return (
    <div className="nft">
      <div className="main">
        <img
          className="tokenImage"
          src={coverImage}
          alt={`Cover for ${title}`}
        />
        <div className="text">
          <h4>{title}</h4>
          <p>◷ {publishDate}</p>
          <p className="description">{getShortenedContent()}</p>
        </div>

        <hr />

        <div className="creator p-1">
          <div className="duration col-md-6 m-1 p-1">
            <button onClick={gotofull} className="btn btn-primary col-md-12">
              Read More..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
