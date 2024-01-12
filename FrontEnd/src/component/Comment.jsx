import React, { useState } from "react";

const CommentSection = () => {
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setError(inputValue.length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk mengirim atau menyimpan komentar sesuai kebutuhan
    console.log("Data yang akan dikirim:", formData);
    // Reset formulir setelah mengirim
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-">
      <h2>Silahkan tinggalkan komentar Anda :)</h2>
      <form
        className="w-full flex flex-col gap-4 sm:gap-6 mt-4"
        onSubmit={handleSubmit}
      >
        <div className="mt-5">
          <label
            className={`absolute transition-all duration-300 transform ${
              error
                ? "-translate-y-6 text-red-500"
                : "-translate-y-6 text-gray-500"
            }`}
            htmlFor="name"
          >
            {error ? "Name is required" : "Name"}
          </label>
          <input
            className={`w-[300px] border-b-[2px] border-[#004AAD] py-2 px-2.5 " transition-all duration-300 ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            type="text"
            placeholder="cth : Emyu"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-2">
          <label
            className={`absolute transition-all duration-300 transform ${
              error
                ? "-translate-y-6 text-red-500"
                : "-translate-y-6 text-gray-500"
            }`}
            htmlFor="email"
          >
            Email :
          </label>
          <input
            className={`w-[300px] border-b-[2px] border-[#004AAD] py-2 px-2.5 " transition-all duration-300 ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            type="email"
            placeholder="cth : emyugurusejarah@gmail.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            className="w-[540px] py-2 px-2.5 border-[1px] border-slate-400 rounded-md"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-[#004AAD] text-white py-2 w-[165px] max-w-[150px] max-h-[40px] px-4 rounded-md"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
