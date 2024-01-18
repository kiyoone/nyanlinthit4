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
import Advocacy from "./Advocacy";
import AdvocacySkeleton from "./AdvocacySkeleton";

const AdvocacyList = ({ type }) => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const category = searchParams.get("category");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess } = useGetClashQuery(
    `resources/type/ADVOCACY?page=${page}&limit=6&category=${category || ""}`
  );

  if (isError) navigate("/error");
  if (isSuccess) console.log(data);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {isLoading && (
            <>
              <AdvocacySkeleton />
              <AdvocacySkeleton />
              <AdvocacySkeleton />
            </>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {isSuccess &&
            data?.resources.map((resource) => (
              <Advocacy key={resource._id} advocacy={resource} />
            ))}
        </div>
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

export default AdvocacyList;
