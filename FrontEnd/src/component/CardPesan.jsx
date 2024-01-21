import React, { useState } from "react";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const CardPesan = ({ payloads, onCardClick, deletepesan }) => {
  const { id, username, email, created_at } = payloads;
  const formatDate = moment(created_at).format("DD MMMM YYYY");
  const [hovered, setHovered] = useState(false);

  return (
    <div onClick={() => onCardClick(payloads.id)}>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`card flex justify-between border border-r-0 border-[#004AAD] p-3 relative z-10`}
          style={{
            transition: "all 0.3s ease",
            transform: hovered ? "translateY(-5px)" : "translateY(0)",
            boxShadow: hovered ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <div className="card-body flex flex-col">
            <p
              className={`card-title ${hovered ? "text-white" : ""}`}
              style={{ fontSize: "16px" }}
            >
              {username}
            </p>
            <p
              className={`card-subtitle mb-2 text-muted ${
                hovered ? "text-white" : ""
              }`}
              style={{ fontSize: "16px" }}
            >
              {email}
            </p>
          </div>
          <div className="card-body flex flex-col">
            <p
              className={`text-small ${hovered ? "text-white" : ""}`}
              style={{ fontSize: "14px" }}
            >
              {formatDate}
            </p>
            <Button
              variant="filled"
              className={`flex justify-end w-[100px] h-[30px] items-center rounded-3 bg-red-500 text-white hover:bg-white hover:text-red-500 mt-3`}
              onClick={deletepesan}
            >
              HAPUS
            </Button>
            {/* <button
              className={`flex justify-end ${
                hovered ? "text-red-500" : "text-red-500"
              } mt-3`}
              style={{ fontSize: "14px" }}
              onClick={deletepesan}
            >
              Delete
            </button> */}
          </div>
        </div>
        <div className="slide-bg absolute inset-0 z-0">
          <div
            className={`h-full w-full bg-[#004AAD] transform ${
              hovered ? "translate-x-0" : "-translate-x-full"
            } animate-slideIn`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardPesan;
