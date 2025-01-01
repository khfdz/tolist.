import React, { useState } from "react";

const AddContent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    link: "",
    createdAt: "",
    tag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem("contentData")) || [];
    existingData.push(formData);
    localStorage.setItem("contentData", JSON.stringify(existingData));

    alert("Data saved successfully!");
    setFormData({
      title: "",
      description: "",
      img: "",
      link: "",
      createdAt: "",
      tag: "",
    });
  };

  return (
    <div className="bg-red-500 p-4">
      <h1 className="text-white text-xl font-bold mb-4">Add Content</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label className="block text-white">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            placeholder="Enter description"
            required
          />
        </div>
        <div>
          <label className="block text-white">Image URL</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            placeholder="Enter image URL"
          />
        </div>
        <div>
          <label className="block text-white">Link</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            placeholder="Enter link"
          />
        </div>
        <div>
          <label className="block text-white">Created At</label>
          <input
            type="date"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-white">Tag</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            placeholder="Enter tag"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700"
        >
          Save Content
        </button>
      </form>
    </div>
  );
};

export default AddContent;
