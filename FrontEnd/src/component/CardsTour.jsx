import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import ImageComponent from "../component/Imagecomponent";
import ImageComponentTour from "./Imagecomponenttour";

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
    <div className="max-w-sm sm:w-[290px] rounded overflow-hidden shadow-lg rounded-[10px]">
      <NavLink to={`/content/${id}`}>
      <div className="w-full" alt="Image">
          {gambarUtama && <ImageComponentTour imageName={gambarUtama} />}
        </div>
      <div className="px-6 py-4">
        <div className="font-bold text-center text-[16px] mb-2 sm:text-base text-[10px]">{name}</div>
      </div>
      </NavLink>
    </div>
  );
};

export default CardsTour;
