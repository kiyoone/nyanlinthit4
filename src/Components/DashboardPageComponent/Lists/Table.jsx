import React from "react";

const Table = ({ data, select }) => {
  const selected = data?.find((state) => state._id === select.id);
  let death0 = 0;
  let injured0 = 0;
  let time0 = 0;
  let possible0 = 0;
  if (selected) {
    const { death, injured, time, possible } = selected;
    death0 = death;
    injured0 = injured;
    time0 = time;
    possible0 = possible;
  }
  return (
    <div className="grid grid-cols-4 grid-rows-2 rounded-lg border border-theme text-theme bg-[#E8EBF0]">
      <div className="text-center py-2 border-b ">Death</div>
      <div className="text-center py-2 border-b ">Injured</div>
      <div className="text-center py-2 border-b ">Time</div>
      <div className="text-center py-2 border-b ">Posible</div>

      <div className="text-center py-2  ">{death0}</div>
      <div className="text-center py-2  ">{injured0}</div>
      <div className="text-center py-2  ">{time0}</div>
      <div className="text-center py-2  ">{possible0}</div>
    </div>
  );
};

export default Table;
