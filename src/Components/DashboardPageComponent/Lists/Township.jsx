import React from "react";
import townshipGeoJson from "../../../assets/township.json";

const Township = ({
  township,
  select,
  viewTown,
  setViewTown,
  selectTown,
  setSelectTown,
  setTownshipGeoJSON,
}) => {
  const isSelect = township?._id === selectTown?._id;
  const style = {
    background: "rgb(25 57 103)",
    color: "white",
  };
  const handleClick = () => {
    setSelectTown(township);
    {
      !viewTown && setTownshipGeoJSON(townshipGeoJson);
    }
    {
      !viewTown && setViewTown(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="py-2 px-4 rounded-lg bg-[#B8C2D0] text-theme cursor-pointer"
      style={isSelect ? style : {}}
    >
      {township.township}
    </div>
  );
};

export default Township;
