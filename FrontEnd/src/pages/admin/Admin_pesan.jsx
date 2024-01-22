import React, { useState, useEffect } from "react";
import CardPesan from "../../component/CardPesan";
import LogPesan from "../../component/LogPesan";
import axios from "axios";

const Admin_pesan = () => {
  const [message, setMessage] = useState([]);
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    try {
      const response = await axios.get("/api/api/contact");
      setMessage(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const deletepesan = async (pesanId) => {
    try {
      const response = await axios.delete(
        `/api/api/contact/${pesanId}`
      );

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const handleCardClick = (id) => {
    setSelectedMessageId(id);
  };

  return (
    <div className="flex h-screen ">
      <div className="w-1/2 max-w-[420px] overflow-y-auto overflow-x-hidden border-r-2 border-blue-500">
        {message.map((message) => (
          <CardPesan key={message.id} payloads={message} onCardClick={handleCardClick} deletepesan={() => deletepesan(message.id)}></CardPesan>
        ))}
      </div>
      <div className="w-screen w-1/2 p-4">
        <div>
          <p className="text-2xl ml-[50px]">Komentar Pengguna</p>
        </div>
        <div className="ml-[50px] mt-5">
          {message.filter(msg => msg.id === selectedMessageId).map((payloads) => (
            <LogPesan key={payloads.id} payloads={payloads}></LogPesan>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin_pesan;