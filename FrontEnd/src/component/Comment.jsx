import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const CommentSection = ({ tourismId }) => {
  const [tourism, setTourism] = useState({ id: 0 });
  useEffect(() => {
    setTourism(tourismId);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("comment", data.comment);
      formData.append("id_pariwisata", tourism?.id);
      formData.append("tanggal", data.tanggal);
      formData.append("name", data.name);
      formData.append("email", data.email);

      console.log(data);

      await axios.post("/api/api/comment", formData, {
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
    <div className="max-w-">
      <h2>Silahkan tinggalkan komentar Anda :)</h2>
      <form
        className="w-full flex flex-col gap-4 sm:gap-6 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-5">
          <label
            className={`absolute transition-all duration-300 transform ${
              errors
                ? "-translate-y-6 text-red-500"
                : "-translate-y-6 text-gray-500"
            }`}
            htmlFor="name"
          >
            {errors ? "Nama tidak boleh kosong" : "Name"}
          </label>
          <input
            {...register("name", { required: true })}
            className={`w-[300px] border-b-[2px] border-[#004AAD] py-2 px-2.5 " transition-all duration-300 ${
              errors
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            type="text"
            placeholder="cth : Emyu"
            id="name"
            name="name"
          />
        </div>
        <div className="mt-2">
          <label
            className={`absolute transition-all duration-300 transform ${
              errors
                ? "-translate-y-6 text-red-500"
                : "-translate-y-6 text-gray-500"
            }`}
            htmlFor="email"
          >
            Email :
          </label>
          <input
            {...register("email", { required: true })}
            className={`w-[300px] border-b-[2px] border-[#004AAD] py-2 px-2.5 " transition-all duration-300 ${
              errors
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
            type="email"
            placeholder="cth : emyugurusejarah@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="comment">Komentar:</label>
          <textarea
            {...register("comment", { required: true })}
            className="sm:w-[540px] w-full py-2 px-2.5 border-[1px] border-slate-400 rounded-md"
            id="comment"
            name="comment"
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
