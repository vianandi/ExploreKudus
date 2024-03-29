import React from "react";
import { Link, NavLink } from "react-router-dom";
import ImageComponent from "../component/Imagecomponent";
import axios from "axios";
import ImageComponentPriority from "./Imagecomponentpriority";

const CardPriorityTour = ({ payloads }) => {
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

  // Fungsi untuk memotong deskripsi menjadi maksimal beberapa kata dan menambahkan "..."
  const potongDeskripsi = (deskripsi, jumlahKata) => {
    const kata = deskripsi.split(" ");
    const deskripsiPotong = kata.slice(0, jumlahKata).join(" ");
    return `${deskripsiPotong}...`;
  };

  const deskripsiPotong = potongDeskripsi(deskripsi1, 20);

  return (
    <div className="max-w-sm sm:w-full w-[100px] rounded overflow-hidden shadow-lg rounded-[10px]">
      <NavLink to={`/content/${id}`}>
        <div className="w-full rounded-[10px]" alt="Sunset in the mountains">
          {gambarUtama && <ImageComponentPriority imageName={gambarUtama} />}
        </div>
        <div className="px-2 py-4">
          <div className="font-bold text-[9px] sm:text-[20px] text-center sm:text-lg">
            {name}
          </div>
          <p
            id="deskripsi"
            className="hidden sm:block text-justify text-gray-700 text-base"
          >
            {deskripsiPotong}
          </p>
        </div>
        {/* <div className="flex px-6 pt-4 pb-2 sm:text-lg overflow-x-auto">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] sm:text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] sm:text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] sm:text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </NavLink>
    </div>
  );
};

export default CardPriorityTour;
