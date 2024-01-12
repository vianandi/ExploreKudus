import React from "react";
import { Link } from "react-router-dom";

const CardsTour = () => {
  return (
    <div className="w-full sm:w-[263px] rounded overflow-hidden shadow-lg rounded-[10px]">
      <img
        className="w-full"
        src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[16px] mb-2">The Coldest Sunset</div>
      </div>
    </div>
  );
};

export default CardsTour;
