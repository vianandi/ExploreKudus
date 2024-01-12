import React, { useState, useEffect } from "react";
import LeftCards from "../component/ContentLeftCards";
import CommentSection from "../component/Comment";
import LogComment from "../component/LogComment";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageComponent from "../component/Imagecomponent";

const Content = () => {
  const { id } = useParams();
  const [tourism, setTourism] = useState(null);

  useEffect(() => {
    getTourisms();
  }, []);
  const getTourisms = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/tourism/${id}`
      );
      setTourism(response.data);
    } catch (error) {
      console.error("Error fetching tourism data:", error);
      // Add error handling logic here, such as setting an error state or showing an error message to the user.
    }
  };

  return (
    <>
      {/* Title */}
      <div className="flex flex-col items-start sm:px-[120px] sm:pt-32 pt-32">
        <div className="flex mt-16">
          <div className="  mr-4 text-[20px] text-[#004AAD] md:text-[42px] font-semibold">
            {tourism?.name}
          </div>
        </div>
        {/* Border */}
        <div className="flex justify-center">
          <div className="text-center">
            <div className="border-t border-[#004AAD] w-[1220px] mx-auto my-4"></div>
          </div>
        </div>
      </div>
      {/* Date */}
      <div className="flex flex-col items-start sm:px-[120px]">
        <div className="flex mt-[-8px]">
          <div className="  mr-4 text-[12px] text-[#004AAD] md:text-[14px] font-semibold">
            12 November 2023
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex sm:px-[120px]">
        {/* Left Col */}
        <div className="max-w-[788px] sm:pr-[12px] mt-4">
          {/* Content 1st Col */}
          <p className="text-justify mb-8">{tourism?.deskripsi1}</p>
          <div className="w-[788px] flex-1 h-[241px]">
            <div className="w-full h-full object-cover rounded-[25px]">
              {tourism?.gambarUtama && (
                <ImageComponent imageName={tourism?.gambarUtama} />
              )}
            </div>
          </div>
          <p className="text-justify my-8">{tourism?.deskripsi2}</p>
          {/* Pict Row */}
          <div className="flex max-w-[788px]">
            <div className="max-w-[788px] sm:pr-[8px]  ">
              <div className="w-[770px] flex-1 h-[217px]">
                <div className="w-full h-full object-cover rounded-[25px]">
                  <div className="w-full h-full object-cover rounded-[25px]">
                    {tourism?.gambarPanjang && (
                      <ImageComponent imageName={tourism?.gambarPanjang} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-justify my-8">{tourism?.deskripsi3}</p>
        </div>

        {/* Right Col */}
        <div className="max-w-[348px] ml-12 sm:pl-[12px] mt-4">
          {/* Content 2nd Col */}
          <h3 className="font-bold text-[#004AAD]">Fasilitas</h3>
          <div className="flex gap-8">
            <div>
              <p>Musholla</p>
              <p>Free Wi-Fi</p>
              <p>Foos Court</p>
              <p>Toilet</p>
            </div>
            <div>
              <p>Musholla</p>
              <p>Free Wi-Fi</p>
              <p>Foos Court</p>
              <p>Toilet</p>
            </div>
            <div>
              <p>Musholla</p>
              <p>Free Wi-Fi</p>
              <p>Foos Court</p>
              <p>Toilet</p>
            </div>
          </div>

          <div className="mt-5 w-[348px]">
            <LeftCards />
            <LeftCards />
            <LeftCards />
          </div>

          {/* ... Your content for the second column goes here ... */}
        </div>
      </div>
      {/* Comment Section */}
      <div className="flex sm:px-[120px]">
        <div className="w-1/2 p-4">
          <CommentSection />
        </div>
        <div className="max-h-[350px] w-1/2 p-4 overflow-y-auto">
          <LogComment />
          <LogComment />
          <LogComment />
          <LogComment />
          <LogComment />
          <LogComment />
        </div>
      </div>
    </>
  );
};

export default Content;
