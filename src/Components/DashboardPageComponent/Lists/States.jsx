import React from "react";
import State from "./State";

const States = ({ setState, data, select }) => {
  return (
    <div className="w-full flex flex-wrap gap-x-1 gap-y-1">
      {data?.map((state) => (
        <State
          key={state._id}
          state={state.state}
          id={state._id}
          setState={setState}
          isActive={state._id === select.id ? true : false}
        />
      ))}
    </div>
  );
};

export default States;
