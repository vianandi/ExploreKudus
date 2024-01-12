import React, { useState } from "react";
import axios from "axios";

const AdminLogin2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        { email, password }
      );

      console.log(response); // Handle success message
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Login failed:", error.response.data.message);
      } else {
        console.error("Login failed:", error.message);
      }
    }
  };

  return (
    <section className="min-h-screen min-w-screen bg-[url(https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png)] bg-cover bg-no-repeat bg-center">
      <div className="absolute w-full sm:w-2/3 h-2/3 sm:h-screen bottom-0 sm:right-0 bg-white rounded-t-lg sm:rounded-l-lg">
        <div className="w-full h-full flex flex-col gap-2 sm:gap-4 justify-center items-center py-4 px-5 sm:px-[320px]">
          <img
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700662610/logooo_kuunpm.png" // Ganti dengan path atau URL gambar Anda
            alt="Explore Kudus Logo"
            className="h-[100px] " // Sesuaikan tinggi gambar sesuai kebutuhan Anda
          />
          <form className="w-full flex flex-col gap-4 sm:gap-6 mt-4">
            <input
              className="w-full py-2 px-2.5 border-b-[1px] border-slate-400"
              type="text"
              placeholder="Email anda"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full py-2 px-2.5 border-b-[1px] border-slate-400"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="w-full justify-end flex">
            <button
              className="box-border w-[100px] h-[30px] bg-[#004AAD] rounded-[3px] text-white text-xs transition"
              onClick={handleLogin}
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin2;
