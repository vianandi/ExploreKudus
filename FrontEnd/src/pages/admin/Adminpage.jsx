import React from "react";
import LightBlueBtn from "../../component/LightBlueBtn";
import LeftCards from "../../component/ContentLeftCards";
import { MasterInputText } from "../../component/MasterInputText";

const Admin = () => {
  return (
    <div className="flex h-auto">
      {/* Kolom Pertama */}
      <div className="w-[19vw] fixed h-screen text-white bg-[#004AAD]">
        {/* Content Kolom Pertama */}
        <h2 className="text-2xl font-semibold mt-16 text-center">Dashboard</h2>
        <p className="mt-8 ml-[65px]">Ronaldo</p>
        <p className="ml-[65px]">ronaldo@gmail.com</p>
        <div className="flex mt-16 h-[82px] bg-[#3498DB] items-center border border-black">
          <img
            className="mr-2 ml-[65px] h-[30px]"
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1701154697/ri_stack-fill_n9ejsu.png"
          ></img>
          <p className="mt-1 text-[16px]">Data Pariwisata</p>
        </div>
        <div className="flex h-[82px] bg-[#3498DB] items-center border border-black">
          <img
            className="mr-2 ml-[65px] h-[30px]"
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1701154697/mdi_map-add_mkjfyh.png"
          ></img>
          <p className="mt-1 text-[16px]">Input Data Pariwisata</p>
        </div>
        {/* ... Your content for the first column goes here ... */}
      </div>

      {/* Kolom Kedua */}

      <div className="flex ml-[20vw] h-screen flex-col">
        <div className="w-full h-full ml-[-1vw] flex border-b-[3px] border-[#004AAD]">
          {/* Content Kolom Kedua */}
          <h2 className="text-xl  mb-4 text-[#004AAD] text-[30px] mt-5 ml-5">
            Data Pariwisata
          </h2>
          {/* Input Search */}
          <div className="relative flex border border-[#5D5A88] w-[400px] h-[40px] rounded-[20px] ml-auto mt-3">
            <input
              type="text"
              placeholder="Cari disini"
              className="py-1 px-2 rounded-[20px] flex-grow"
            />
            <button className="text-[#5D5A88] rounded-[20px] mr-5 ml-2">
              Cari
            </button>
          </div>
          {/* ... Your content for the second column goes here ... */}
        </div>
        {/* Category */}
        <div className="flex flex-col items-center ">
          {/* Baris Pertama */}
          <div className="flex mb-4 ">
            <div className=" p-4 mr-4 text-[20px] text-[#004AAD] md:text-[36px] font-semibold">
              KATEGORI
            </div>
          </div>
          {/* Baris Kedua */}
          <div className="flex">
            <div className="p-2">
              <LightBlueBtn
                path="/"
                text="WISATA ALAM"
                width={"w-full sm:w-1/3"}
              />
            </div>
            <div className="p-2 ">
              <LightBlueBtn
                path="/"
                text="WISATA BELANJA"
                width={"w-full sm:w-1/3"}
              />
            </div>
            <div className="p-2">
              <LightBlueBtn
                path="/"
                text="WISATA KULINER"
                width={"w-full sm:w-1/3"}
              />
            </div>
            <div className=" p-2">
              <LightBlueBtn
                path="/"
                text="WISATA PRIORITAS"
                width={"w-full sm:w-1/3"}
              />
            </div>
            <div className=" p-2">
              <LightBlueBtn
                path="/"
                text="WISATA RELIGI"
                width={"w-full sm:w-1/3"}
              />
            </div>
            <div className=" p-2">
              <LightBlueBtn
                path="/"
                text="WISATA SEJARAH"
                width={"w-full sm:w-1/3"}
              />
            </div>
          </div>
        </div>
        <div className="ml-3 max-w-[1195px] flex flex-wrap gap-3">
          <LeftCards />
          <LeftCards />
          <LeftCards />
          <LeftCards />
          <LeftCards />
          <LeftCards />
          <LeftCards />
          <LeftCards />
          <LeftCards />
        </div>
      </div>
    </div>
  );
};

export default Admin;
