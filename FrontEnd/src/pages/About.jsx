import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../component/AuthContext";
import { Button } from "@material-tailwind/react";

const About = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const handleDashboardClick = () => {
    if (isLoggedIn) {
      navigate("/admin2/tourdata");
    } else {
      navigate("/adminlogin2");
    }
  };

  return (
    <>
      {/* Title */}
      <div className="flex flex-col items-center sm:pt-32 pt-32">
        <div className=" mb-4 mt-[10px]">
          <div className="p-4 text-center font-semibold text-[20px] text-[#004AAD] md:text-[54px]">
            EXPLORE KUDUS
          </div>
          <div className="text-center font-reguler mt-[-15px] text-[10px] text-[#9795B5] md:text-[16px]">
            Jelajahi Kudus, Temukan Keindahan yang Tersembunyi!
          </div>
        </div>
      </div>
      {/* Content 1*/}
      <div className="container mx-auto flex sm:px-[120px]">
        {/* Kolom Pertama */}
        <div className="w-1/2 p-4">
          <div className="w-full flex-1 h-[241px]">
            <img
              className="w-full h-full object-cover rounded-md "
              src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700928242/_34509b52-4c76-4338-965d-3b7846f00e1d_el1bmv.jpg"
              alt="hero-banner"
            />
          </div>
        </div>
        {/* Kolom Kedua */}
        <div className="w-1/2 p-4">
          <p className="text-justify text-[#8D8BA7] text-[12px] md:text-[16px]">
            Selamat datang di "Explore Kudus," portal penjelajahan yang
            mengundang Anda untuk merasakan keindahan dan kekayaan destinasi
            pariwisata di bumi Kudus. Terletak di Jawa Tengah, Indonesia, Kudus
            menghadirkan pengalaman wisata yang menyelami sejarah, memperkaya
            budaya, dan menikmati pesona alam yang memukau. Dari keunikan
            tradisi kerajinan tembakau hingga cagar budaya yang menakjubkan,
            setiap sudut Kudus memiliki cerita sendiri yang menanti untuk
            diungkap.
          </p>
        </div>
      </div>
      {/* Content 2 */}
      <div className="container mx-auto flex sm:px-[120px]">
        {/* Kolom Pertama */}
        <div className="w-1/2 p-4">
          <p className="text-justify text-[#8D8BA7] text-[12px] md:text-[16px]">
            Dengan "Explore Kudus," Anda dapat menjelajahi keberagaman destinasi
            wisata yang mencakup situs bersejarah seperti Menara Kudus, yang
            membawa Anda kembali ke zaman penyebaran Islam di Indonesia.
            Saksikan keindahan alam yang memukau di Bendungan Logung atau
            nikmati kelezatan kuliner khas Kudus seperti Soto Kudus dan Jenang
            Kudus yang terkenal. Kami mengajak Anda untuk menjelajahi kekayaan
            kultural dan alam Kudus, membangkitkan rasa ingin tahu Anda, dan
            menciptakan kenangan tak terlupakan di destinasi yang mempesona ini.
            Selamat menikmati petualangan Anda di "Explore Kudus"!
          </p>
            <Button
              variant="filled"
              className="rounded-3 w-[143px] h-[45px] bg-[#004aad] mt-5"
              onClick={handleDashboardClick}
            >
              Dashboard
            </Button>
        </div>
        {/* Kolom Kedua */}
        <div className="w-1/2 p-4">
          <div className="w-full flex-1 h-[241px]">
            <img
              className="w-full h-full object-cover rounded-md "
              src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700928252/_bbcd81d0-bbe4-4a37-b167-3edbe11aeaf2_isffso.jpg"
              alt="hero-banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
