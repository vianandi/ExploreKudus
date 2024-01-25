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
      <div className="max-w-sm max-h-sm max-w-[348px] space-y-4 mt-5 rounded rounded-[10px]">
        {/* Card */}
        <div className="max-w-[348px] border border-[#D4D2E3] rounded rounded-[10px]">
          <div alt="Card" className="w-full rounded-lg">
            {gambarUtama && <ImageComponentleft imageName={gambarUtama} />}
          </div>
          <p className="mt-4 text-[#004AAD] font-semibold text-center sm:text-[16px] text-[12px]">
            {name}
          </p>
          <p className="text-[#3498DB] text-center sm:text-[16px] text-[10px]">
            {alamat}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default LeftCards;
