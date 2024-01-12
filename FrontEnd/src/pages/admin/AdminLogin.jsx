import React from "react";

const AdminLogin = () => {
  return (
    <div className=" h-screen flex justify-center w-screen">
      {/* kolom 1 */}
      <div className="w-screen ">
        <img
          src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700663305/unsplash_dI7vfR1Bqcg_fxdg56.png" // Ganti dengan path atau URL gambar Anda
          alt="bg"
          className="h-full w-[516px] bg-cover bg-no-repeat bg-center" // Sesuaikan tinggi gambar sesuai kebutuhan Anda
        />
      </div>
      {/* kolom 2 */}
      <div className="flex flex-col  h-full px-48 justify-center bg-[#2B8D2F]">
        <img
          src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700662610/logooo_kuunpm.png" // Ganti dengan path atau URL gambar Anda
          alt="Explore Kudus Logo"
          className="h-[100px] " // Sesuaikan tinggi gambar sesuai kebutuhan Anda
        />
        <div className="flex flex-col text-left justify-center relative mt-[100px]">
          <form>
            <div className="relative mb-5 flex flex-col w-[400px]">
              <input
                className="w-full py-2 px-2.5 border-b-[1px] border-[#004AAD] border-slate-400 placeholder-[#004AAD] text-[#004AAD]"
                type="text"
                placeholder="Nama"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="relative mb-5 flex flex-col w-[400px]">
              <input
                className="w-full py-2 px-2.5 border-b-[1px] border-[#004AAD] border-slate-400 placeholder-[#004AAD] text-[#004AAD]"
                type="password"
                placeholder="Kata sandi"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="w-full justify-end flex">
              <button className="box-border w-[100px] h-[30px] bg-[#004AAD] rounded-[3px] text-white text-xs transition">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
