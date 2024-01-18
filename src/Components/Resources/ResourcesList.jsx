import React, { useEffect, useState } from "react";
import { useGetClashQuery } from "../../features/api/apiSlice";
import { Pagination } from "@mui/material";
import Resource from "./Resource";
import ResourceSkeleton from "./ResourceSkeleton";
import {
  redirect,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const ResourcesList = ({ type }) => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const category = searchParams.get("category");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess } = useGetClashQuery(
    `resources/type/${type.toUpperCase()}?page=${page}&limit=6&category=${
      category || ""
    }`
  );

  if (isError) navigate("/error");
  const handlePageChange = async (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return () => setPage(1);
  }, [type]);
  console.log(page);
  return (
    <>
      <div className="py-12 min-h-[50vh]">
        {isLoading && (
          <>
            <ResourceSkeleton />
            <ResourceSkeleton />
          </>
        )}
        {isSuccess &&
          data?.resources.map((resource) => (
            <Resource key={resource._id} resource={resource} />
          ))}
      </div>
      <div className="mt flex justify-center">
        {" "}
        <Pagination
          count={data?.pages}
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ResourcesList;
