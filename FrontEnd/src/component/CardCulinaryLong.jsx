import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageComponent from "../component/Imagecomponent";
import axios from "axios";

const CardCulinaryLong = ({ payloads }) => {
  const [tourism, setTourisms] = useState(null);
  const {
    id,
    gambarUtama,
    name,
    alamat,
    deskripsi1,
    deskripsi2,
    deskripsi3,
    created_at,
    category,
  } = payloads;

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

  // Fungsi untuk memotong deskripsi menjadi maksimal beberapa kata dan menambahkan "..."
  const potongDeskripsi = (deskripsi, jumlahKata) => {
    const kata = deskripsi.split(" ");
    const deskripsiPotong = kata.slice(0, jumlahKata).join(" ");
    return `${deskripsiPotong}...`;
  };

  const deskripsiPotong = potongDeskripsi(deskripsi1, 10);

  return (
    <NavLink to={`/content/${id}`}>
      <div className="relative -z-10 max-w-[600px] max-h-[268px] sm:w-[580px] sm:h-[260px] w-[170px] h-[95px] lg:flex rounded overflow-hidden shadow-lg rounded-[20px]">
        <div className="rounded rounded-[20px]">
          {gambarUtama && <ImageComponent imageName={gambarUtama} />}
        </div>
        {/* <img
          className="w-full h-full object-cover rounded-[20px] "
          src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
          alt="Sunset in the mountains"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-black bg-opacity-50 text-white p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-white font-bold sm:text-xl text-[12px] mb-2">
              {name}
              {/* Can coffee make you a better developer? */}
            </div>
            <p className="text-gray-300 sm:text-base text-[10px]">
              {deskripsiPotong}
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. */}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardCulinaryLong;
