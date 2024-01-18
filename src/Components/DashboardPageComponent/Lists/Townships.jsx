import React from "react";
import Township from "./Township";

const Townships = ({
  data,
  select,
  setViewTown,
  viewTown,
  setSelectTown,
  selectTown,
  setTownshipGeoJSON,
}) => {
  return (
    <div className="px-9 py-9 bg-[#E8EBF0] rounded-lg max-h-[230px] flex items-center justify-start flex-wrap gap-x-1 gap-y-1 overflow-scroll">
      {data
        ?.find((state) => state._id === select.id)
        ?.township?.map((township) => (
          <Township
            key={township._id}
            township={township}
            select={select}
            setViewTown={setViewTown}
            viewTown={viewTown}
            selectTown={selectTown}
            setSelectTown={setSelectTown}
            setTownshipGeoJSON={setTownshipGeoJSON}
          />
        ))}
    </div>
  );
};

export default Townships;
