import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LogPesan = ({ payloads }) => {
  const { id, username, email, telp, pesan, created_at } = payloads;
  const [message, setMessage] = useState("");

  return (
      <div className="flex flex-col">
        <p>Username : {username}</p>
        <p>Email : {email}</p>
        <p>Telp / WhatsApp: {telp}</p>
        <p className="mt-5">Pesan : {pesan}</p>
      </div>
  );
};

export default LogPesan;
