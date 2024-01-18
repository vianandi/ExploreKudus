import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const CardsTour = ({payloads}) => {
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
  return (
    <div className="w-full sm:w-[263px] rounded overflow-hidden shadow-lg rounded-[10px]">
      <NavLink to={`/content/${id}`}>
      <img
        className="w-full"
        src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[16px] mb-2">{name}</div>
      </div>
      </NavLink>
    </div>
  );
};

export default CardsTour;
