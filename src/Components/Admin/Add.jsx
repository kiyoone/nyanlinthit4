import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetClashQuery,
  useUploadResourceMutation,
} from "../../features/api/apiSlice";
import { CircularProgress } from "@mui/material";

const Add = ({ types }) => {
  const [uploading, setUploading] = useState(false);
  const { data } = useGetClashQuery("resources/category?type=OTHERS");

  // const [file, setFile] = useState([]);
  const [body, setBody] = useState({
    title: ``,
    date: "",
    image: "",
    pdf: "",
    mmPDF: "",
    category: "",
    type: "",
  });

  const resetBody = () => {
    setBody({
      title: "",
      date: "",
      pdf: "",
      mmPDF: "",
      category: "",
      type: "",
      embedded: "",
    });
  };

  const { title, pdf, mmPDF, category, type, date, embedded } = body;

  const valid = [title, pdf, mmPDF, category, type, date, embedded].every(
    Boolean
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBody((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEngFileChange = (event) => {
    const { name, files } = event.target;
    setBody((prev) => ({ ...prev, pdf: files[0] }));
  };

  const handleMMFileChange = (event) => {
    const { name, files } = event.target;
    setBody((prev) => ({ ...prev, mmPDF: files[0] }));
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    console.log(name, files);
    setBody((prev) => ({ ...prev, image: files }));
  };

  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm();

  const [uploadResource] = useUploadResourceMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    setUploading(true);
    try {
      await uploadResource(body).unwrap();

      resetBody();
      setUploading(false);
    } catch (err) {
      console.log(err, "error");
      // if (err.status === "403" || "401") {
      //   localStorage.removeItem("User");
      //   navigate("/login");
      // }
      resetBody();
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
          onSubmit={handleSubmit}
          className="w-full sm:w-2/3 md:w-1/2 h-fit py-8 rounded-lg shadow-card bg-indigo-200"
        >
          <div className="w-full px-4 mb-4">
            <textarea
              className={`border ${
                errors.title
                  ? "border-red-600 bg-red-50"
                  : "bg-transparent border-0"
              } rounded-lg w-full shadow shadow-black p-4 `}
              {...register("title", { required: "Title is required" })}
              name="title"
              onChange={handleChange}
              aria-invalid={errors.title ? "true" : "false"}
              placeholder="Title"
            >
              {title}
            </textarea>
            {errors.title && (
              <small role="alert" className="text-red-600">
                {errors.title?.message}
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
              } rounded-lg w-full  shadow shadow-black p-4 `}
              {...register("date", {
                required: "Date is required",
              })}
              value={date}
              name="date"
              onChange={handleChange}
              aria-invalid={errors.date ? "true" : "false"}
              placeholder="Date"
            />

            {errors.date && (
              <small role="alert" className="text-red-600">
                {errors.date?.message}
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
          {type !== "ADVOCACY" && (
            <>
              <div className="w-full px-4 mb-4">
                <input
                  list="adminCategory"
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
                <datalist id="adminCategory">
                  {data?.category.map((category) => (
                    <option key={category} value={category} />
                  ))}
                </datalist>
                {errors.category && (
                  <small role="alert" className="text-red-600">
                    {errors.category?.message}
                  </small>
                )}
              </div>
              <div className="w-full px-4 mb-4">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className={`border ${
                    errors.image
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-2 `}
                  {...register("image", {
                    required: "Image is required",
                  })}
                  name="image"
                  onChange={handleImageChange}
                  aria-invalid={errors.image ? "true" : "false"}
                  placeholder="Image"
                />
                {/* {errors.image ? (
              <small role="alert" className="text-red-600">
                {errors.image?.message}
              </small>
            ) : (
              !image && (
                <p role="alert" className="text-indigo-600">
                  Choose Image To upload
                </p>
              )
            )} */}
              </div>
              <div className="w-full px-4 mb-4">
                <input
                  type="file"
                  className={`border ${
                    errors.pdf
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-2 `}
                  {...register("pdf", {
                    required: "Eng Pdf is required",
                  })}
                  name="pdf"
                  onChange={handleEngFileChange}
                  aria-invalid={errors.pdf ? "true" : "false"}
                  placeholder="pdf"
                />
                {errors.pdf ? (
                  <small role="alert" className="text-red-600">
                    {errors.pdf?.message}
                  </small>
                ) : (
                  !pdf && (
                    <p role="alert" className="text-indigo-600">
                      Choose English Pdf to upload
                    </p>
                  )
                )}
              </div>
              <div className="w-full px-4 mb-4">
                <input
                  type="file"
                  className={`border ${
                    errors.mmPDF
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-2 `}
                  {...register("mmPDF", {
                    required: "Myanmar Pdf is required",
                  })}
                  name="mmPDF"
                  onChange={handleMMFileChange}
                  aria-invalid={errors.mmPDF ? "true" : "false"}
                  placeholder="pdf"
                />
                {errors.mmPDF ? (
                  <small role="alert" className="text-red-600">
                    {errors.mmPDF?.message}
                  </small>
                ) : (
                  !mmPDF && (
                    <p role="alert" className="text-indigo-600">
                      Choose Myanmar Pdf to upload
                    </p>
                  )
                )}
              </div>
            </>
          )}
          {type === "ADVOCACY" && (
            <div className="w-full px-4 mb-4">
              <input
                className={`border ${
                  errors.embedded
                    ? "border-red-600 bg-red-50"
                    : "bg-transparent border-0"
                } rounded-lg w-full  shadow shadow-black p-4 `}
                {...register("embedded", {
                  required: "embedded is required",
                })}
                value={embedded}
                name="embedded"
                onChange={handleChange}
                aria-invalid={errors.embedded ? "true" : "false"}
                placeholder="Embedded Link"
              />

              {errors.embedded && (
                <small role="alert" className="text-red-600">
                  {errors.embedded?.message}
                </small>
              )}
            </div>
          )}
          <div className="w-full px-4 text-end">
            <button className="bg-theme text-white p-4 rounded-lg active:scale-75 transition-transform font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
