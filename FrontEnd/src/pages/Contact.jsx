import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("telp", data.telp);
      formData.append("pesan", data.pesan);

      console.log(data);

      await axios.post("/api/api/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Data add successfull");
      reset();
    } catch (error) {
      console.error("Error add data: ", error);
    }
  };

  return (
    <div className="container mx-auto  mt-8 flex justify-center sm:pt-32 pt-32">
      <form
        className="flex flex-col w-[1214px] md:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Kolom Pertama */}
        <div className="flex flex-col w-full md:w-1/2 px-4 mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            id="username"
            name="username"
            placeholder="cth : Ronaldo"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label
            htmlFor="email"
            className="block mt-4 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="text"
            id="email"
            name="email"
            placeholder="cth : ronaldo@gmail.com"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label
            htmlFor="telp"
            className="block mt-4 text-sm font-medium text-gray-700"
          >
            No Telepon / No WhatsApp
          </label>
          <input
            {...register("telp", { required: true })}
            type="text"
            id="telp"
            name="telp"
            placeholder="cth : 08xxxxxxxxxx"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        {/* Kolom Kedua */}
        <div className="flex flex-col w-full md:w-1/2 px-4 mb-4 ">
          <label
            htmlFor="pesan"
            className="block text-sm font-medium text-gray-700"
          >
            Pesan
          </label>
          <textarea
            {...register("pesan", { required: true })}
            id="pesan"
            name="pesan"
            placeholder="Tulis pesan Anda..."
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
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
