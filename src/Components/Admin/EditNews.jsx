import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetClashQuery,
  useGetNewsByIdQuery,
  useUpdateNewsMutation,
} from "../../features/api/apiSlice";
import { CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = ({ types }) => {
  const { news_id, township_id } = useParams();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const { data, isSuccess } = useGetNewsByIdQuery(news_id);

  // const [file, setFile] = useState([]);
  const [body, setBody] = useState({
    title: "",
    dashBoard: township_id,
    shortDescription: "",
    longDescription: "",
    date: "",
  });
  console.log(body);

  const resetBody = () => {
    setBody({
      title: ``,
      dashBoard: township_id,
      shortDescription: "",
      longDescription: "",
      date: "",
    });
  };

  const { title, shortDescription, longDescription, date } = body;

  const valid = [title, shortDescription, longDescription, date].every(Boolean);

  useEffect(() => {
    setBody({
      title: data?.find?.title,
      dashBoard: township_id,
      shortDescription: data?.find?.shortDescription,
      longDescription: data?.find?.longDescription,
      date: data?.find?.date.substring(0, 10),
    });
  }, [isSuccess]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBody((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm();

  const [uploadNews] = useUpdateNewsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(body);
    setUploading(true);
    try {
      let results = await uploadNews({ body, id: news_id }).unwrap();
      console.log(results, "fulfilled");
      navigate(-1);
      setUploading(false);
    } catch (err) {
      console.log(err, "error");
      // if (err.status === "403" || "401") {
      //   localStorage.removeItem("User");
      //   navigate("/login");
      // }

      setUploading(false);
    }
  };

  return (
    <div className="relative">
      {uploading && (
        <div className="absolute w-full h-full bg-transparent/10 flex items-center justify-center top-0 left-0">
          <div className="p-12 bg-gray-100 rounded-lg">
            <CircularProgress />
          </div>
        </div>
      )}
      <div className="flex items-center justify-center ">
        <form
          encType="multipart/form-data"
          onSubmit={valid ? handleSubmit : onSubmit(handleSubmit)}
          className="w-full sm:w-2/3 md:w-1/2 h-fit py-8 rounded-lg shadow-card bg-indigo-200"
        >
          <div className="w-full px-4 mb-4">
            <input
              className={`border ${
                errors.title
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full shadow shadow-black p-4 `}
              {...register("title", {
                required: "Title is required",
              })}
              name="title"
              onChange={handleChange}
              aria-invalid={errors.title ? "true" : "false"}
              placeholder="Title"
              value={title}
            />

            {errors.title && (
              <small role="alert" className="text-red-600">
                {errors.title?.message}
              </small>
            )}
          </div>
          <div className="w-full px-4 mb-4">
            <input
              className={`border ${
                errors.shortDescription
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full shadow shadow-black p-4 `}
              {...register("shortDescription", {
                required: "Short Description is required",
              })}
              name="shortDescription"
              onChange={handleChange}
              aria-invalid={errors.shortDescription ? "true" : "false"}
              placeholder="Enter Short Description"
              value={shortDescription}
            />

            {errors.shortDescription && (
              <small role="alert" className="text-red-600">
                {errors.shortDescription?.message}
              </small>
            )}
          </div>
          <div className="w-full px-4 mb-4">
            <textarea
              className={`border ${
                errors.longDescription
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full shadow shadow-black p-4 `}
              {...register("longDescription", {
                required: "Long Description is required",
              })}
              name="longDescription"
              onChange={handleChange}
              aria-invalid={errors.longDescription ? "true" : "false"}
              placeholder="Enter Full Description"
              value={longDescription}
            ></textarea>
            {errors.longDescription && (
              <small role="alert" className="text-red-600">
                {errors.longDescription?.message}
              </small>
            )}
          </div>
          <div className="w-full px-4 mb-4">
            <input
              type="date"
              className={`border ${
                errors.date
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full shadow shadow-black p-4 `}
              {...register("date", {
                required: "Date is required",
              })}
              name="date"
              onChange={handleChange}
              aria-invalid={errors.date ? "true" : "false"}
              placeholder="Date"
              value={date}
            />

            {errors.date && (
              <small role="alert" className="text-red-600">
                {errors.date?.message}
              </small>
            )}
          </div>
          <div className="w-full px-4 text-end">
            <button
              type="button"
              onClick={() => navigate("..")}
              className="bg-theme text-white p-4 mr-4 rounded-lg active:scale-75 transition-transform font-semibold"
            >
              Back
            </button>
            <button className="bg-theme text-white p-4 rounded-lg active:scale-75 transition-transform font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNews;
