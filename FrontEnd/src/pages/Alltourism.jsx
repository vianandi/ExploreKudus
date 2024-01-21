import React, { useState, useEffect } from "react";
import LightBlueBtn from "../component/LightBlueBtn";
import CardsTour from "../component/CardsTour";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Alltourism = () => {
  const [tourism, setTourisms] = useState([]);
  const [dataTourism, setDataTourisms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const filteredData = dataTourism.filter((tourism) =>
    searchTerm
      ? tourism.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  useEffect(() => {
    getTourisms();
  }, [selectedCategory]);

  const getTourisms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tourism");
      setTourisms(response.data);
      setDataTourisms(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  useEffect(() => {
    // console.log(selectedCategory)
    // console.log(tourism)
    filteredTourism();
  }, [selectedCategory, tourism]);

  const filteredTourism = async () => {
    if (selectedCategory !== null) {
      const dataTour = tourism.filter(
        (tour) => tour.category_id == selectedCategory
      );
      console.log(dataTour);
      setDataTourisms(dataTour);
    } else {
      setDataTourisms(tourism);
    }
  };

  return (
    <>
      {/* Category */}
      <div className="flex flex-col items-center ">
        {/* Baris Pertama */}
        <div className="flex mb-4 ">
          <div className=" p-4 mr-4 text-[20px] mt-[120px] text-[#004AAD] md:text-[36px] font-semibold">
            KATEGORI
          </div>
        </div>
        {/* Baris Kedua */}
        <div className="flex gap-2">
          <div className="p-2">
            <LightBlueBtn
              // path="/tourism"
              text="WISATA ALAM"
              width={"w-[400px] sm:w-1/3"}
              action={() => handleCategoryClick(2)}
            />
          </div>
          <div className="p-2 ">
            <LightBlueBtn
              path="/tourism"
              text="WISATA BELANJA"
              width={"w-full sm:w-1/3"}
              action={() => handleCategoryClick(3)}
            />
          </div>
          <div className="p-2">
            <LightBlueBtn
              path="/tourism"
              text="WISATA KULINER"
              width={"w-full sm:w-1/3"}
              action={() => handleCategoryClick(4)}
            />
          </div>
          <div className=" p-2">
            <LightBlueBtn
              path="/tourism"
              text="WISATA RELIGI"
              width={"w-full sm:w-1/3"}
              action={() => handleCategoryClick(5)}
            />
          </div>
          <div className=" p-2">
            <LightBlueBtn
              path="/tourism"
              text="WISATA SEJARAH"
              width={"w-full sm:w-1/3"}
              action={() => handleCategoryClick(6)}
            />
          </div>
        </div>
      </div>
      {/* Cards Tour */}
      <div className="container mx-auto mb-2 mt-8 sm:px-[120px] px-[5px]">
        <div className="flex flex-wrap mx-4">
          {/* Baris Pertama */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-5 sm:px-[20px] sm:pt-10 sm:pb-10">
            {filteredData?.map(
              (tourism) =>
                tourism && (
                  <CardsTour key={tourism.id} payloads={tourism}></CardsTour>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alltourism;
