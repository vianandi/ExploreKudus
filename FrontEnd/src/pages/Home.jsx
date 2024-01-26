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
import CardCulinaryBig from "../component/CardCulinaryBig";

const Home = () => {
  const [tourism, setTourisms] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const shuffledTourism = shuffle([...tourism])
    .filter((tour) => tour.category_id === "4")
    .slice(0, 4);

  useEffect(() => {
    getTourisms();
  }, []);

  const getTourisms = async () => {
    try {
      const response = await axios.get("/api/api/tourism");
      setTourisms(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  if (tourism === null) {
    return <p>Loading...</p>;
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  return (
    <>
      {/*  pt-24  */}

      <div className="w-full px-5 sm:px-[120px] sm:pt-32 pt-32 sm:pb-4 sm:overflow-x-hidden">
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
      <div className="flex flex-wrap sm:flex gap-4 w-full px-5 sm:px-[90px] sm:pt-10 sm:pb-10">
        {shuffle([...tourism])
          .filter((tour) => tour.category_id === "1")
          .slice(0, 6)
          .map((tourism) => (
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
      <div className="flex gap-2 sm:flex-row px-5 rounded-[20px] w-full h-auto sm:px-[80px] sm:h-[555px] mb-5">
        {/* Kolom 1 */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-1 sm:pt-2 sm:pb-5 w-full rounded-[20px]">
          {shuffledTourism
            // .slice(0, Math.ceil(shuffledTourism.length / 2)) // take the first half of the array
            .map((tourism) => (
              <CardCulinaryLong
                key={tourism.id}
                payloads={tourism}
              ></CardCulinaryLong>
            ))}
        </div>
      </div>
      {/* Culinary Button */}
      <div className="p-2 text-center">
        <CulinaryBtn
          path="/tourism"
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
      <div className="flex mx-auto mb-2 mt-8 sm:px-[50px] px-[5px]">
        <div className="flex mx-4">
          {/* Baris Pertama */}
          <div className="flex flex-wrap gap-4 px-5 sm:px-[20px] sm:pt-10 sm:pb-10">
            {shuffle([...tourism])
              .slice(0, 8)
              .map(
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
          path="/tourism"
          text="LIHAT LEBIH BANYAK"
          width={"w-full sm:w-1/3"}
        />
      </div>
    </>
  );
};

export default Home;
