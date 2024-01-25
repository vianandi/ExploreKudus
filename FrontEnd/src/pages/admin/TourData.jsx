import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LeftCards from "../../component/ContentLeftCards";
import Dropdown from "../../component/DropdownCategory";
import ModalForm from "../../component/EditModalForm";
import ModalInputData from "../../component/ModalInputData";
import Modal3 from "../../component/Modal3";
import CardsAdmin from "../../component/CardsForAdmin";
import axios from "axios";
import { useLocation } from "react-router-dom";
import LightBlueBtn from "../../component/LightBlueBtn";
import { Button } from "@material-tailwind/react";
import NavbarAdmin from "../../component/NavbarAdmin";

const TourData = () => {
  const [IsShowModalAdd, setIsShowModalAdd] = useState(false);
  const [dataTourism, setDataTourisms] = useState([]);
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const getTourisms = async () => {
    try {
      const response = await axios.get("/api/api/tourism");
      setTourisms(response.data);
      setDataTourisms(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const deletetourism = async (tourismId) => {
    try {
      const response = await axios.delete(`/api/api/tourism/${tourismId}`);

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = dataTourism.filter((tourism) =>
    searchTerm
      ? tourism.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [tourism, setTourisms] = useState([]);

  useEffect(() => {
    getTourisms();
  }, [selectedCategory]);

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
    <div className="flex h-screen ">
      <div className="flex h-screen flex-col">
        <div className="flex flex-col items-center mb-5">
          {/* Baris Pertama */}
          <div className="flex">
            <div className="p-4 mr-4 text-[18px] text-[#004AAD] md:text-[36px] font-semibold">
              KATEGORI
            </div>
          </div>
          {/* Baris Kedua */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex gap-5">
              <LightBlueBtn
                // path="/tourism"
                text="WISATA PRIORITAS"
                action={() => handleCategoryClick(1)}
              />
              <LightBlueBtn
                // path="/tourism"
                text="WISATA ALAM"
                action={() => handleCategoryClick(2)}
              />
              <LightBlueBtn
                // path="/tourism"
                text="WISATA BELANJA"
                action={() => handleCategoryClick(3)}
              />
            </div>
            <div className="flex gap-5">
              <LightBlueBtn
                // path="/tourism"
                text="WISATA KULINER"
                action={() => handleCategoryClick(4)}
              />
              <LightBlueBtn
                // path="/tourism"
                text="WISATA RELIGI"
                action={() => handleCategoryClick(5)}
              />
              <LightBlueBtn
                // path="/tourism"
                text="WISATA SEJARAH"
                action={() => handleCategoryClick(6)}
              />
            </div>
          </div>
        </div>
        {/* Header */}
        {/* <NavbarAdmin /> */}
        {/* Category */}

        <div className="mx-2 flex flex-wrap gap-3 justify-center pb-[50px]">
          {filteredData?.map(
            (tourism) =>
              tourism && (
                <CardsAdmin
                  key={tourism.id}
                  payloads={tourism}
                  deletetourism={() => deletetourism(tourism.id)}
                ></CardsAdmin>
              )
          )}

          {/* <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin /> */}
        </div>
        {/* Button Add Data */}
        <div className="fixed bottom-2 right-3">
          <button
            onClick={() => {
              setIsShowModalAdd(true);
            }}
            className="flex bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Tambah Pariwisata
            <div className="w-5 h-5 hover:bg-white">
              <img
                src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1701213122/tdesign_grid-add_wvxsuk.png"
                alt="Add Data"
                className="ml-2 w-full h-full object-cover"
              />
            </div>
          </button>
          <ModalInputData
            isOpen={IsShowModalAdd}
            onClose={() => {
              setIsShowModalAdd(false);
            }}
          />
        </div>
        <div className="flex mt-[30px] text-white">.</div>
      </div>
    </div>
  );
};

export default TourData;
