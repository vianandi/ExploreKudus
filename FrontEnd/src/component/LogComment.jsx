import React from "react";

const LogComment = ({ payloads }) => {
  const { id, name, comment,tanggal, created_at } = payloads;
  return (
    <div className="flex">
      {/* Kolom 1 */}
      <div className="w-1/2 p-4">
        <p className="text-[14px] text-[#004AAD] font-bold mb-1">{name}</p>
        <p className="text-[16px]">{comment}</p>
      </div>

      {/* Kolom 2 */}
      <div className="text-[14px] w-1/2 p-4">
        <p>{created_at}</p>
      </div>
    </div>
  );
};

export default LogComment;
