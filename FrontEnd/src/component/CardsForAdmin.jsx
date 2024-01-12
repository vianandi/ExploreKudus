import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditModalForm from "./EditModalForm"; // Import EditModalForm dari lokasi yang benar
import ButtonPrimary from "./ButtonPrimary";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BorderColor from "@mui/icons-material/BorderColor";
import DeleteForever from "@mui/icons-material/DeleteForever";
import ChatIcon from '@mui/icons-material/Chat';
import Chat from "@mui/icons-material/Chat";


const CardsAdmin = ({payloads,deletetourism}) => {
  const {gambarUtama, name, alamat,deskripsi1,deskripsi2,deskripsi3,created_at, category} = payloads;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        {/* Link menggunakan "#" agar tidak mengarahkan ke halaman baru */}
        <div className="flex flex-col max-w-[348px] space-y-4 mt-5">
          {/* Card */}
          <div className="max-w-[348px] p-4 rounded-[25px] border border-[#D4D2E3]">
            <img
              className="w-full max-w-[304px] max-h-[160px] h-auto rounded-lg"
              src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png"
              alt="Card"
            />
            <p className="mt-4 text-[#004AAD] font-semibold text-center">{name}
            </p>
            <p className="text-[#3498DB] text-center">{alamat}
            </p>
            <div className="flex gap-10 justify-center">
              <div>
                <ButtonPrimary
                  className="flex w-10 h-5 justify-center items-center"
                  onClick={handleOpenModal}
                >
                  <BorderColor style={{ fontSize: "1.2rem" }}></BorderColor>
                </ButtonPrimary>
              </div>
              <div>
                <ButtonPrimary
                  className="flex w-10 h-5 justify-center items-center"
                >
                  <Chat style={{ fontSize: "1.2rem" }}></Chat>
                </ButtonPrimary>
              </div>
              <div>
                <ButtonPrimary
                  className="flex w-10 h-5 justify-center items-center"
                  onClick={deletetourism}
                >
                  <DeleteForever style={{ fontSize: "1.5rem" }}/>
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default CardsAdmin;
