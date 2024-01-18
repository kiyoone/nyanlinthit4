import React from "react";
import { States, Townships, Table, DropdownList } from "./Lists";
import TownshipTable from "./Lists/TownshipTable";

const List = (props) => {
  const {
    viewTown,
    setViewTown,
    setSelectTown,
    selectTown,
    select,
    setTownshipGeoJSON,
  } = props;
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <DropdownList
        year={props.year}
        setYear={props.setYear}
        viewTown={viewTown}
        setViewTown={setViewTown}
        setSelectTown={setSelectTown}
        setTownshipGeoJSON={setTownshipGeoJSON}
      />
      {!viewTown && (
        <>
          {" "}
          <States {...props} />
          <Table {...props} />
        </>
      )}
      {select.name && <Townships {...props} />}
      {viewTown && <TownshipTable selectTown={selectTown} />}
    </div>
  );
};

export default List;
