
import React, { useState } from "react";

export const Del = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    contact: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Delete Blog Request submitted:", formData);
    // Clear form fields after submission if needed
    setFormData({
      title: "",
      author: "",
      contact: "",
      reason: "",
    });
  };
  return <div className="container mt-5 sc">
  <h1 className="display-4 mb-4">Request Deletion of a Blog</h1>
  <form onSubmit={handleSubmit} id="ex" netlify name="Del_Blogs">
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
      <label htmlFor="reason" className="form-label">
        Reason for Deletion
      </label>
      <textarea
        className="form-control"
        id="reason"
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        placeholder="Enter reason for deletion"
        rows="5"
        required
      ></textarea>
    </div>

    <button type="submit" className="btn btn-danger">
      Submit Deletion Request
    </button>
  </form>
</div>;
};
