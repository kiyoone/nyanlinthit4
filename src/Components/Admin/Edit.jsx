import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useGetClashQuery,
  useUpdateResourceMutation,
} from "../../features/api/apiSlice";
import { CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ types }) => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { data: resource, isSuccess } = useGetClashQuery(`resources/id/${_id}`);

  const [uploading, setUploading] = useState(false);
  const [body, setBody] = useState({
    _id: "",
    title: "",

    category: "",
    type: "",
  });

  useEffect(() => {
    setBody({
      _id: resource?.find._id,
      title: resource?.find.title,

      category: resource?.find.category,
      type: resource?.find.type,
    });
  }, [isSuccess]);

  const resetBody = () => {
    setBody({
      _id: "",
      title: "",

      category: "",
      type: "",
    });
  };

  const { title, category, type } = body;

  const valid = [title, category, type].every(Boolean);

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

  const [updateResource] = useUpdateResourceMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      let results = await updateResource(body).unwrap();
      resetBody();
      setUploading(false);
      navigate(-1);
    } catch (err) {
      console.log(err, "error");
      if (err.status === "403" || "401") {
        localStorage.removeItem("User");
        navigate("/login");
      }
      resetBody();
      setUploading(false);
      navigate(-1);
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
      <div className="flex min-h-screen items-center justify-center p-5 ">
        <form
          encType="multipart/form-data"
          onSubmit={valid ? handleSubmit : onSubmit(handleSubmit)}
          className="w-full sm:w-1/2 h-fit py-8 rounded-lg shadow-card bg-indigo-200"
        >
          <div className="w-full px-4 mb-4">
            <input
              className={`border ${
                errors.title
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full shadow shadow-black p-4 `}
              {...register("title", { required: "Title is required" })}
              value={title}
              name="title"
              onChange={handleChange}
              aria-invalid={errors.title ? "true" : "false"}
              placeholder="Title"
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
                errors.category
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full  shadow shadow-black p-4 `}
              {...register("category", {
                required: "Category is required",
              })}
              value={category}
              name="category"
              onChange={handleChange}
              aria-invalid={errors.category ? "true" : "false"}
              placeholder="Category"
            />
            {errors.category && (
              <small role="alert" className="text-red-600">
                {errors.category?.message}
              </small>
            )}
          </div>
          <div className="w-full px-4 mb-4">
            <select
              className={`border ${
                errors.type
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full  shadow shadow-black p-4 `}
              {...register("type", {
                required: "Type is required",
              })}
              value={type}
              name="type"
              onChange={handleChange}
              aria-invalid={errors.type ? "true" : "false"}
              id="Type_select"
            >
              <option value="" disabled selected>
                Please Choose Type
              </option>
              {types?.map((type) => (
                <option key={type.name} value={type.to.toUpperCase()}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.type && (
              <small role="alert" className="text-red-600">
                {errors.type?.message}
              </small>
            )}
          </div>

          <div className="w-full px-4 text-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-theme text-white p-4 rounded-lg active:scale-75 mx-4 transition-transform font-semibold"
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

export default Edit;
