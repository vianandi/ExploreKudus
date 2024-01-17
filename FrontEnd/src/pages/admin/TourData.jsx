import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LeftCards from "../../component/ContentLeftCards";
import Dropdown from "../../component/DropdownCategory";
import ModalForm from "../../component/EditModalForm";
import ModalInputData from "../../component/ModalInputData";
import Modal3 from "../../component/Modal3";
import CardsAdmin from "../../component/CardsForAdmin";
import axios from "axios";
import LightBlueBtn from "../../component/LightBlueBtn";
import { Button } from "@material-tailwind/react";
import NavbarAdmin from "../../component/NavbarAdmin";

const TourData = () => {
  const [IsShowModalAdd, setIsShowModalAdd] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [tourism, setTourisms] = useState([]);

  useEffect(() => {
    getTourisms();
  }, []);

  const getTourisms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tourism");
      setTourisms(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const deletetourism = async (tourismId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/tourism/${tourismId}`
      );

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex h-screen flex-col">
        {/* Header */}
        <NavbarAdmin />
        {/* Category */}

        <div className="mx-3 flex flex-wrap gap-3 mt-[90px] pb-[50px]">
          {tourism.map((tourism) => (
            <CardsAdmin
              key={tourism.id}
              payloads={tourism}
              deletetourism={() => deletetourism(tourism.id)}
            ></CardsAdmin>
          ))}

          {/* <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
          <CardsAdmin />
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
        {/* <Link>
          <div
            onClick={() =>{
              setIsShowModalAdd(true);
            }}
            className="fixed bottom-0 right-0 mb-4 mr-4"
          >
            <div className="w-20 h-20 hover:bg-white">
              <img
                src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1701213122/tdesign_grid-add_wvxsuk.png"
                alt="Add Data"
                className="w-full h-full object-cover"
              />
              <ModalInputData isOpen={IsShowModalAdd} />
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default TourData;
