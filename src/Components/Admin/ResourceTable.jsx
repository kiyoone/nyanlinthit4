import React, { useState } from "react";
import {
  useDeleteResearchMutation,
  useGetDashboardByIdQuery,
} from "../../features/api/apiSlice";
import { Delete, Edit } from "@mui/icons-material";
import { Alert, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResourceTable = ({ stateId }) => {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const {
    data: research,
    isSuccess,
    isFetching,
    isError,
  } = useGetDashboardByIdQuery(stateId);

  if (isSuccess) console.log(research);
  if (isError) navigate("/admin/error");

  const [deleteResearch] = useDeleteResearchMutation();
  const handleDelete = async (name) => {
    console.log(name);
    try {
      await deleteResearch({ stateId, name }).unwrap();
    } catch (error) {
      console.log(error);
      setAlert(true);
    }
  };

  return (
    <div className="mt-4">
      {isFetching && (
        <div className=" w-full rounded bg-transparent flex items-center justify-center top-0 left-0">
          <div className="p-12 bg-gray-100 rounded-lg">
            <CircularProgress />
          </div>
        </div>
      )}
      {!isFetching && isSuccess && (
        <table className="w-full border border-theme rounded-lg">
          <tr className="border-b border-theme rounded-lg">
            <th className="py-2">Township</th>
            <th className="py-2">Death</th>
            <th className="py-2">Injured</th>
            <th className="py-2">Time</th>
            <th className="py-2">Possible</th>
            <th className="py-2">Action</th>
          </tr>
          {research?.find.township.map((township) => (
            <tr
              className="text-center border-b border-theme"
              key={township._id}
            >
              <td className="py-1">{township.township}</td>
              <td className="py-1">{township.death}</td>
              <td className="py-1">{township.injured}</td>
              <td className="py-1">{township.time}</td>
              <td className="py-1">{township.possible}</td>
              <td className="py-1 flex gap-2 justify-center">
                <Edit
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      `../${township._id}?state=${research.find._id}&year=${
                        research.find.year
                      }&township=${JSON.stringify(township)}`
                    )
                  }
                />
                <Delete
                  className="cursor-pointer"
                  onClick={() => handleDelete(township.township)}
                />
              </td>
            </tr>
          ))}
        </table>
      )}
      {alert && (
        <Alert
          severity="error"
          className="mt-4"
          onClose={() => setAlert(false)}
        >
          Delete Error
        </Alert>
      )}
    </div>
  );
};

export default ResourceTable;
