import React from "react";

const LogComment = () => {
  return (
    <div className="flex">
      {/* Kolom 1 */}
      <div className="w-1/2 p-4">
        <p className="text-[14px] text-[#004AAD] font-bold mb-1">Lionel Ronaldo</p>
        <p className="text-[16px]">Tempatnya bagus, bersih.</p>
      </div>

      {/* Kolom 2 */}
      <div className="text-[14px] w-1/2 p-4">
        <p>12 November 2023</p>
      </div>
    </div>
  );
};

export default LogComment;
