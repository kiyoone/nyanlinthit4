import React from "react";

const State = ({ state, setState, id, isActive }) => {
  return (
    <div
      className={`border border-theme  py-2 px-5 rounded-lg cursor-pointer ${
        isActive && "bg-theme text-white"
      }`}
      onClick={() => setState((prev) => ({ id, name: state }))}
    >
      {state}
    </div>
  );
};

export default State;
