import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LeftCards from "../../component/ContentLeftCards";
import Dropdown from "../../component/DropdownCategory";
import ModalForm from "../../component/EditModalForm";
import ModalInputData from "../../component/ModalInputData";
import Modal3 from "../../component/Modal3";
import CardsAdmin from "../../component/CardsForAdmin";
import axios from "axios";

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
        <div className="fixed">
          <div className=" w-screen h-full flex border-b-[3px] border-[#004AAD] bg-white">
            <p className=" mb-4 text-[#004AAD] text-[30px] mt-5 ml-5 font-semibold">
              Data Pariwisata
            </p>

            {/* <div className="flex ml-3 items-center justify-end">
              <Dropdown />
            </div> */}

            {/* Input Search */}
            <div className="flex ml-3 items-center ml-auto mr-9">
              {/* Dropdown */}
              <div className="mr-5">
                <Dropdown />
              </div>
              <div className="flex border border-[#5D5A88] w-[400px] h-[40px] rounded-[20px] ">
                <input
                  type="text"
                  placeholder="Cari disini"
                  className="py-1 px-2 rounded-[20px] flex-grow"
                />
                <button className="text-[#5D5A88] rounded-[20px] mr-5 ml-2">
                  Cari
                </button>
              </div>
              <Link to="/adminlogin2">
                <button
                  type="submit"
                  className="hover:bg-[#CD0404] border border-[#CD0404] text-[#CD0404] hover:text-white py-2 max-w-[150px] w-[100px] max-h-[40px] px-4 rounded-md ml-5"
                >
                  Logout
                </button>
              </Link>
              <Link to="/">
                <button
                  type="submit"
                  className="hover:bg-[#004AAD] border border-[#004AAD] text-[#004AAD] hover:text-white py-2 max-w-[150px] w-[100px] max-h-[40px] px-4 rounded-md ml-5"
                >
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Category */}

        <div className="mx-3 flex flex-wrap gap-3 mt-[80px] pb-[50px]">
          {tourism.map((tourism)=>
            <CardsAdmin key={tourism.id} payloads={tourism} deletetourism={()=> deletetourism(tourism.id)}></CardsAdmin>
          )}
          
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
