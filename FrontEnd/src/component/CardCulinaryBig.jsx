import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageComponent from "../component/Imagecomponent";
import axios from "axios";

const CardCulinaryBig = ({ payloads }) => {
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

  const deskripsiPotong = potongDeskripsi(deskripsi1, 20);

  return (
    <NavLink to="/content">
      <div className="relative max-w-[600px] h-[555px] lg:flex rounded overflow-hidden shadow-lg rounded-[20px]">
        <div className="rounded rounded-[20px] w-full h-full">
          {gambarUtama && <ImageComponent imageName={gambarUtama} className="object-cover w-full h-full" />}
        </div>
        <div className="rounded-[20px] absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-white font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-300 text-base">{deskripsiPotong}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardCulinaryBig;
