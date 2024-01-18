import React, { useState, useContext } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { DisplayTheme } from "../../Context/context";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetClashQuery } from "../../features/api/apiSlice";
import { Pagination } from "@mui/material";
import Resource from "./Resource";
import ResourceSkeleton from "./ResourceSkeleton";
import Advocacy from "./Advocacy";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const theme = useContext(DisplayTheme);
  const { darkMode } = theme;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const prevRoute = location?.state?.prevPath?.split("/");
  const searchType = prevRoute[prevRoute.length - 1].toUpperCase();
  const [search, setSearch] = useState(false);

  const { data, isLoading, isError, isSuccess } = useGetClashQuery(
    `resources/search/?page=${page}&limit=6&type=${searchType}&category=&search=${keyword}`
  );
  // console.log(data, "search type is , " + searchType + search + keyword);

  if (isError) navigate("/error");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch((prev) => !prev);
  };

  const handlePageChange = async (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" py-16 sm:py-0">
      <div className="flex justify-center items-center py-8 sm:px-10 px-4 gap-2">
        <p
          className={`${
            darkMode ? "bg-transparent border-white border" : "bg-gray-200"
          }  sm:hidden py-2 px-2  rounded-full transition-transform `}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosNewIcon />
        </p>
        <form onSubmit={handleSubmit} method="get" className="w-full sm:w-1/2">
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full  rounded-full indent-5 bg-transparent"
            placeholder="Enter keyword to search"
          />
        </form>
      </div>
      <div className="">
        {isLoading && (
          <>
            <ResourceSkeleton />
            <ResourceSkeleton />
          </>
        )}
        {searchType === "ADVOCACY" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {isSuccess &&
              data?.resources.map((resource) => (
                <Advocacy key={resource._id} advocacy={resource} />
              ))}
          </div>
        )}
        {isSuccess &&
          data?.resources.map((resource) => (
            <Resource key={resource._id} resource={resource} />
          ))}
      </div>
      <div className="mt-5 flex justify-center">
        {" "}
        <Pagination
          count={data?.pages}
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Search;
