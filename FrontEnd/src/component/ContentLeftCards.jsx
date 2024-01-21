import React from "react";
import { Link, NavLink } from "react-router-dom";
import ImageComponent from "../component/Imagecomponent";
import ImageComponentleft from "./Imagecomponentleft";

const LeftCards = ({ payloads }) => {
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
    <NavLink to={`/content/${id}`}>
      <div className="flex flex-col max-w-[348px] space-y-4 mt-5">
        {/* Card */}
        <div className="max-w-[348px] p-4 rounded-[25px] border border-[#D4D2E3]">
          <div
            alt="Card"
            className="w-full max-w-[304px] sm:max-h-[100%] rounded-lg"
          >
            {gambarUtama && <ImageComponentleft imageName={gambarUtama} />}
          </div>
          <p className="mt-4 text-[#004AAD] font-semibold text-center">
            {name}
          </p>
          <p className="text-[#3498DB] text-center">{alamat}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default LeftCards;
