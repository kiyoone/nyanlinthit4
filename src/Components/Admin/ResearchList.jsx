import React, { useState } from "react";
import { useGetDashboardQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ResourceTable from "./ResourceTable";
import { Dropdown } from "flowbite-react";

const ResearchList = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(2021);
  const [stateId, setStateId] = useState();
  const {
    data: dashboard,
    isSuccess,
    isError,
    isFetching,
  } = useGetDashboardQuery(year);

  if (isError) navigate("/admin/error");
  const style = {
    background: "rgb(25 57 103)",
    color: "white",
  };

  return (
    <div className="flex justify-center">
      {isFetching && (
        <div className=" w-full rounded bg-transparent flex items-center justify-center top-0 left-0">
          <div className="p-12 bg-gray-100 rounded-lg">
            <CircularProgress />
          </div>
        </div>
      )}
      {!isFetching && isSuccess && (
        <div className="w-full sm:w-2/3 md:w-1/2">
          <div className="py-2 px-4 border border-theme w-24 mb-4 text-end rounded-lg">
            <Dropdown
              inline={true}
              label={year}
              className="rounded-lg text-theme w-24 -mx-4 mt-2"
            >
              <Dropdown.Item onClick={() => setYear("2021")}>
                2021
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setYear("2022")}>
                2022
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setYear("2023")}>
                2023
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {dashboard?.findState?.map((state) => (
              <div
                key={state._id}
                className="border border-theme py-2 px-3 rounded-lg cursor-pointer"
                onClick={() => setStateId(state._id)}
                style={stateId === state._id ? style : {}}
              >
                {state.state}
              </div>
            ))}
          </div>
          {stateId && <ResourceTable stateId={stateId} />}
        </div>
      )}
    </div>
  );
};

export default ResearchList;
