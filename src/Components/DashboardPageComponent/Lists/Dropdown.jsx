import { Dropdown } from "flowbite-react";
import React from "react";

const DropdownList = ({
  year,
  setYear,
  viewTown,
  setViewTown,
  setSelectTown,
  setTownshipGeoJSON,
}) => {
  const handleClick = () => {
    setTownshipGeoJSON(null);
    setViewTown(false);
    setSelectTown(null);
  };
  return (
    <div className="flex justify-end">
      {viewTown && (
        <div
          onClick={handleClick}
          className="py-2 px-4 border border-theme w-24 rounded-lg cursor-pointer"
        >
          States
        </div>
      )}
      {!viewTown && (
        <div className="py-2 px-4 border border-theme w-24 rounded-lg">
          <Dropdown
            inline={true}
            label={year}
            className="rounded-lg text-theme w-24 -mx-4 mt-2"
          >
            <Dropdown.Item onClick={() => setYear("2021")}>2021</Dropdown.Item>
            <Dropdown.Item onClick={() => setYear("2022")}>2022</Dropdown.Item>
            <Dropdown.Item onClick={() => setYear("2023")}>2023</Dropdown.Item>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
