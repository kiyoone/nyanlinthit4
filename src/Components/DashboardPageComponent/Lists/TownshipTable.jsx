import React from "react";

const TownshipTable = ({ selectTown }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 rounded-lg border border-theme text-theme bg-[#E8EBF0]">
      <div className="text-center py-2 border-b ">Death</div>
      <div className="text-center py-2 border-b ">Injured</div>
      <div className="text-center py-2 border-b ">Time</div>
      <div className="text-center py-2 border-b ">Posible</div>

      <div className="text-center py-2  ">{selectTown?.death}</div>
      <div className="text-center py-2  ">{selectTown?.injured}</div>
      <div className="text-center py-2  ">{selectTown?.time}</div>
      <div className="text-center py-2  ">{selectTown?.possible}</div>
    </div>
  );
};

export default TownshipTable;
