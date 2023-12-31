
import React, { useState } from "react";

export const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    contact: "",
    coverImage: null,
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form data submitted:", formData);
    // Clear form fields after submission if needed
    setFormData({
      title: "",
      author: "",
      content: "",
      contact: "",
      coverImage: null,
      attachment: null,
    });
  };

  return (
    <div className="container mt-3 sc ">
    <h4 className=" w-100 text-center">Request to Add a Blog</h4>
    <form onSubmit={handleSubmit} id="ex" netlify name="Add_Blogs">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Blog Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author Name
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Blog Content
        </label>
        <textarea
          className="form-control"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter blog content"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="contact" className="form-label">
          Contact Details (Email/Phone)
        </label>
        <input
          type="text"
          className="form-control"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter contact details"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="publishDate" className="form-label">
          Publish Date
        </label>
        <input
          type="date"
          className="form-control"
          id="publishDate"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
          placeholder="Select publish date"
        />
      </div>

      {/* Cover Image Input */}
      <div className="mb-3">
        <label htmlFor="coverImage" className="form-label">
          Cover Image
        </label>
        <input
          type="file"
          className="form-control"
          id="coverImage"
          name="coverImage"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {/* Additional Attachment Input */}
      <div className="mb-3">
        <label htmlFor="attachment" className="form-label">
          Additional File Attachment
        </label>
        <input
          type="file"
          className="form-control"
          id="attachment"
          name="attachment"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Request
      </button>
    </form>
    <dir className="mb-5"> </dir>
    <dir className="mb-5"> </dir>
  </div>
  );
};






