import React from "react";
import LightBlueBtn from "../component/LightBlueBtn";
import CardsTour from "../component/CardsTour";

const Alltourism = () => {
  return (
    <>
      {/* Category */}
      <div className="flex flex-col items-center ">
        {/* Baris Pertama */}
        <div className="flex mb-4 ">
          <div className=" p-4 mr-4 text-[20px] mt-[120px] text-[#004AAD] md:text-[36px] font-semibold">
            KATEGORI
          </div>
        </div>
        {/* Baris Kedua */}
        <div className="flex gap-2">
          <div className="p-2">
            <LightBlueBtn
              path="/"
              text="WISATA ALAM"
              width={"w-[400px] sm:w-1/3"}
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
      {/* Cards Tour */}
      <div className="container mx-auto mb-2 mt-8 sm:px-[120px] px-[5px]">
        <div className="flex flex-wrap mx-4">
          {/* Baris Pertama */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <CardsTour />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alltourism;
