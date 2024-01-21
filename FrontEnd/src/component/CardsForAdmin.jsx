import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditModalForm from "./EditModalForm"; // Import EditModalForm dari lokasi yang benar
import ButtonPrimary from "./ButtonPrimary";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BorderColor from "@mui/icons-material/BorderColor";
import DeleteForever from "@mui/icons-material/DeleteForever";
import ChatIcon from "@mui/icons-material/Chat";
import Chat from "@mui/icons-material/Chat";
import CommentModalForm from "./CommentModalForm";
import axios from "axios";
import { useForm } from "react-hook-form";
import ImageComponent from "../component/Imagecomponent";
import ButtonRed from "./ButtonRed";
import ButtonBLue from "./ButtonBlue";

const CardsAdmin = ({ payloads, deletetourism, tourismId }) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCommentOpen, setIsModalCommentOpen] = useState(false);

  // useEffect(() => {
  //   setTourism(tourismId);
  // }, []);

  const handleOpenModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  const handleOpenModalComment = () => {
    console.log("Opening modal");
    setIsModalCommentOpen(true);
  };

  const handleCloseModalComment = () => {
    console.log("Closing modal");
    setIsModalCommentOpen(false);
  };

  return (
    <>
      <div>
        {/* Link menggunakan "#" agar tidak mengarahkan ke halaman baru */}
        <div className="flex flex-col max-w-[348px] space-y-4 mt-5">
          {/* Card */}
          <div className="max-w-[348px] p-4 rounded-[25px] border border-[#D4D2E3]">
            <div
              alt="Card"
              className="w-full max-w-[304px] max-h-[160px] h-auto rounded-lg"
            >
              {gambarUtama && <ImageComponent imageName={gambarUtama} />}
            </div>
            <p className="mt-4 text-[#004AAD] font-semibold text-center">
              {name}
            </p>
            <p className="text-[#3498DB] text-center">{alamat}</p>
            <div className="flex gap-10 justify-center">
              <div>
                <ButtonBLue
                  className="flex w-10 h-5 justify-center items-center"
                  onClick={handleOpenModal}
                >
                  <BorderColor style={{ fontSize: "1.2rem" }}></BorderColor>
                </ButtonBLue>
              </div>
              <div>
                <ButtonPrimary
                  className="flex w-10 h-5 justify-center items-center"
                  onClick={handleOpenModalComment}
                >
                  <Chat style={{ fontSize: "1.2rem" }}></Chat>
                </ButtonPrimary>
              </div>
              <div>
                <ButtonRed
                  className="flex w-10 h-5 justify-center items-center"
                  onClick={deletetourism}
                >
                  <DeleteForever style={{ fontSize: "1.5rem" }} />
                </ButtonRed>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <EditModalForm isOpen={isModalOpen} onClose={handleCloseModal} /> */}

      <EditModalForm
        tourismId={id}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <CommentModalForm
        tourismId={id}
        isOpen={isModalCommentOpen}
        onClose={handleCloseModalComment}
      />
    </>
  );
};

export default CardsAdmin;
