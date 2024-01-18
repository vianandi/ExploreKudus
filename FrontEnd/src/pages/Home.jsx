import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Navbar2 from "../component/Navbar2";
import HeroSection from "../component/HeroSection";
import LightBlueBtn from "../component/LightBlueBtn";
import CardPriorityTour from "../component/CardPriorityTour";
import CardCulinaryLong from "../component/CardCulinaryLong";
import CulinaryBtn from "../component/CulinaryBtn";
import CardsTour from "../component/CardsTour";
import axios from "axios";

const Home = () => {
  const [tourism, setTourisms] = useState([]);

  useEffect(() => {
    getTourisms();
  }, []);
  const getTourisms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tourism");
      setTourisms(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };
  return (
    <>
      {/*  pt-24  */}

      <div className="w-full px-5 sm:px-[120px] sm:pt-32 pt-32 sm:pb-4">
        <HeroSection />
      </div>
      {/* Priority Tour */}
      <div className="flex flex-col items-center">
        <div className=" mb-4 mt-[30px]">
          <div className="p-4 mr-4 font-semibold text-[20px] text-[#004AAD] md:text-[36px]">
            PARIWISATA PRIORITAS
          </div>
          <div className=" text-center font-reguler mt-[-15px] text-[10px] text-[#9795B5] md:text-[18px]">
            Wisata prioritas di Kabupaten Kudus
          </div>
        </div>
      </div>
      {/* Cards Priority Tour */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full px-5 sm:px-[120px] sm:pt-10 sm:pb-10">
        {tourism.map((tourism) => (
          <CardPriorityTour
            key={tourism.id}
            payloads={tourism}
          ></CardPriorityTour>
        ))}
      </div>
      {/* Culinary Tour */}
      <div className="flex flex-col items-center">
        <div className=" mb-4 mt-[10px]">
          <div className="p-4 text-center font-semibold text-[20px] text-[#004AAD] md:text-[36px]">
            WISATA KULINER
          </div>
          <div className="text-center font-reguler mt-[-15px] text-[10px] text-[#9795B5] md:text-[18px]">
            Berikut rekomendasi kuliner jika Anda berwisata di Kabupaten Kudus
          </div>
        </div>
      </div>
      {/* Cards Culinary Tour */}
      <div className="flex w-full sm:px-[120px]">
        {/* Kolom 1 */}
        <div className="flex flex-col gap-4 px-5 sm:pt-10 pb-10 sm:pb-5 ">
          <CardCulinaryLong />
          <CardCulinaryLong />
        </div>

        {/* Kolom 2 */}
        <div className="flex -z-10 flex-col w-1/2 sm:pt-10">
          <Link to="/content">
            <div className="relative w-[600px] h-[552px] lg:flex">
              <img
                className="w-full h-full object-cover rounded-[20px]"
                src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
                alt="Sunset in the mountains"
              />
              <div className="rounded-[20px] absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-white font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p className="text-gray-300 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Culinary Button */}
      <div className="p-2 text-center">
        <CulinaryBtn
          path="/"
          text="LIHAT LEBIH BANYAK"
          width={"w-full sm:w-1/3"}
        />
      </div>
      {/* Culinary Tour */}
      <div className="flex flex-col items-center mt-8">
        <div className=" mb-4 mt-[10px]">
          <div className="p-4 text-center font-semibold text-[20px] text-[#004AAD] md:text-[36px]">
            PARIWISATA
          </div>
          <div className="text-center font-reguler mt-[-15px] text-[10px] text-[#9795B5] md:text-[18px]">
            Temukan keindahan alam, warisan budaya, dan petualangan tak
            terlupakan di destinasi wisata kami. Mulai rencanakan liburan Anda
            sekarang!
          </div>
        </div>
      </div>
      {/* Cards Tour */}
      <div className="container mx-auto mb-2 mt-8 sm:px-[120px] px-[5px]">
        <div className="flex flex-wrap mx-4">
          {/* Baris Pertama */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-5 sm:px-[20px] sm:pt-10 sm:pb-10">
            {tourism.map(
              (tourism) =>
                tourism && (
                  <CardsTour key={tourism.id} payloads={tourism}></CardsTour>
                )
            )}
          </div>
        </div>
      </div>
      {/* Culinary Button */}
      <div className="p-2 text-center mb-8">
        <CulinaryBtn
          path="/"
          text="LIHAT LEBIH BANYAK"
          width={"w-full sm:w-1/3"}
        />
      </div>
    </>
  );
};

export default Home;
