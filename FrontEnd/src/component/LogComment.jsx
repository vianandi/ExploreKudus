import React from "react";
import moment from "moment/moment";

const LogComment = ({ payloads }) => {
  const { id, name, comment,tanggal, created_at } = payloads;
  const formatDate = moment(created_at).format("DD MMMM YYYY");
  return (
    <div className="flex">
      {/* Kolom 1 */}
      <div className="w-1/2 p-4">
        <p className="text-[14px] text-[#004AAD] font-bold mb-1">{name}</p>
        <p className="text-[16px]">{comment}</p>
      </div>

      {/* Kolom 2 */}
      <div className="text-[14px] w-1/2 p-4">
        <p>{formatDate}</p>
      </div>
    </div>
  );
};

export default LogComment;
