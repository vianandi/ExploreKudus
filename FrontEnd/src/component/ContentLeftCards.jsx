import React from "react";
import { Link } from "react-router-dom";

const LeftCards = () => {
  return (
    <Link to="/content">
      <div className="flex flex-col max-w-[348px] space-y-4 mt-5">
        {/* Card */}
        <div className="max-w-[348px] p-4 rounded-[25px] border border-[#D4D2E3]">
          <img
            className="w-full max-w-[304px] max-h-[160px] h-auto rounded-lg"
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
            alt="Card"
          />
          <p className="mt-4 text-[#004AAD] font-semibold text-center">
            Masjid Agung Kudus
          </p>
          <p className="text-[#3498DB] text-center">
            Kec. Kota Kudus, Kabupaten Kudus
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LeftCards;
