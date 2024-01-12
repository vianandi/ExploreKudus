import React from "react";
import { Link } from "react-router-dom";

const CardCulinaryLong = () => {
  return (
    <Link to="/content">
      <div className="relative  -z-10 w-[600px] h-[268px] lg:flex ">
        <img
          className="w-full h-full object-cover rounded-[20px] "
          src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
          alt="Sunset in the mountains"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-black bg-opacity-50 text-white p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-white font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-300 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCulinaryLong;
