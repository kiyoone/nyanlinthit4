import React, { useEffect, useState } from "react";
import { useGetClashQuery } from "../../features/api/apiSlice";
import Resource from "./Resource";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Pagination } from "@mui/material";
import Filter from "./Filter";

const ACM = ({ type }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortDirection, setSortDirection] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const {
    isFetching,
    data: resources,
    isSuccess,
    isError,
    isLoading,
    error,
  } = useGetClashQuery(
    `resources/type/${type.to.toUpperCase()}?page=${page}&limit=${limit}&sortBy=${sortDirection}&search=${keyword}`
  );

  if (isError) {
    console.log(error);
    navigate("../error");
  }

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

  return (
    <section className="h-full">
      <div className="text-center p-10 tmd:ext-4xl sm:text-3xl text-xl font-semibold ">
        {type.name}
      </div>
      <Filter
        limit={limit}
        setLimit={setLimit}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div className="flex flex-wrap justify-center gap-8 my-8">
        {isLoading ||
          (isFetching && (
            <div className=" w-full rounded bg-transparent flex items-center justify-center top-0 left-0">
              <div className="p-12 bg-gray-100 rounded-lg">
                <CircularProgress />
              </div>
            </div>
          ))}
        {!isFetching && isSuccess && resources?.resources.length > 0
          ? resources?.resources.map((resource) => (
              <Resource key={resource._id} resource={resource} />
            ))
          : !isFetching && (
              <div className="my-12">No Resources uploaded Yet!</div>
            )}
      </div>
      <div className="mt-5 w-full flex justify-center ">
        <Pagination
          count={resources?.pages}
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ACM;
