import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    message: "",
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
    // Lakukan sesuatu dengan data formulir yang dikumpulkan
    console.log(formData);
  };

  return (
    <div className="container mx-auto  mt-8 flex justify-center sm:pt-32 pt-32">
      <form className="flex flex-col w-[1214px] md:flex-row">
        {/* Kolom Pertama */}
        <div className="flex flex-col w-full md:w-1/2 px-4 mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="cth : Ronaldo"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          <label
            htmlFor="email"
            className="block mt-4 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="cth : ronaldo@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          <label
            htmlFor="phoneNumber"
            className="block mt-4 text-sm font-medium text-gray-700"
          >
            No Telepon
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="cth : 08xxxxxxxxxx"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        {/* Kolom Kedua */}
        <div className="flex flex-col w-full md:w-1/2 px-4 mb-4 ">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Tulis pesan Anda..."
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="bg-[#004AAD] text-white py-2 max-w-[150px] max-h-[40px] px-4 rounded-md mt-4 "
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
