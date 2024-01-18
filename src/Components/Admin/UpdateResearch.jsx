import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetDashboardQuery,
  useUpdateResearchMutation,
} from "../../features/api/apiSlice";
import { Alert, CircularProgress } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const UpdateResearch = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [updateResearch] = useUpdateResearchMutation();
  const [stateArray, setStateArray] = useState([]);
  const { id } = useParams();
  const [query, setQuery] = useSearchParams();
  console.log(stateArray);

  const oldTownshipData = JSON.parse(query.get("township"));
  const {
    township: oldTownship,
    death: oldDeath,
    injured: oldInjured,
    time: oldTime,
    possible: oldPossible,
  } = oldTownshipData;

  const [body, setBody] = useState({
    state: query.get("state"),
    year: query.get("year"),
    township: oldTownship,
    death: oldDeath,
    injured: oldInjured,
    time: oldTime,
    possible: oldPossible,
  });
  const {
    data: dashboard,
    isSuccess,
    isFetching,
    isError,
  } = useGetDashboardQuery(body.year);
  if (isError) navigate("/admin/error");

  useEffect(() => {
    setStateArray(dashboard?.findState);
  }, [isSuccess]);

  const resetBody = () => {
    setBody({
      state: "",
      year: "",
      township: "",
      death: "",
      injured: "",
      time: "",
      possible: "",
    });
  };

  const { state, township, year, death, injured, time, possible } = body;

  const valid = [state, township, year, death, injured, time, possible].every(
    Boolean
  );

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(body);
    setUploading(true);
    try {
      let results = await updateResearch(body).unwrap();
      resetBody();
      navigate(-1);
      setSeverity("success");
      setUploading(false);
    } catch (err) {
      console.log(err, "error");
      setMessage(err?.data?.msg);
      setSeverity("error");
      setAlert(true);
      // if (err.status === "403" || "401") {
      //   localStorage.removeItem("User");
      //   navigate("/login");
      // }
      setUploading(false);
    }
  };

  return (
    <>
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
              <select
                className={`border ${
                  errors.year
                    ? "border-red-600 bg-red-50"
                    : "bg-transparent border-0"
                } rounded-lg w-full shadow shadow-black p-4 `}
                {...register("year", {
                  required: "Year is required",
                })}
                name="year"
                onChange={handleChange}
                aria-invalid={errors.year ? "true" : "false"}
                placeholder="Choose year or Region Name"
                value={year}
              >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>

              {errors.state && (
                <small role="alert" className="text-red-600">
                  {errors.state?.message}
                </small>
              )}
            </div>
            <div className="w-full px-4 mb-4">
              <select
                className={`border ${
                  errors.state
                    ? "border-red-600 bg-red-50"
                    : "bg-transparent border-0"
                } rounded-lg w-full shadow shadow-black p-4 `}
                {...register("state", {
                  required: "State is required",
                })}
                name="state"
                onChange={handleChange}
                aria-invalid={errors.state ? "true" : "false"}
                placeholder="Choose State or Region Name"
                defaultValue={state}
              >
                <option value="" disabled>
                  Choose state / region name
                </option>

                {stateArray?.map((stateData) => (
                  <option
                    value={stateData.state}
                    key={stateData._id}
                    selected={stateData._id == state ? true : false}
                  >
                    {stateData.state}
                  </option>
                ))}
              </select>

              {errors.state && (
                <small role="alert" className="text-red-600">
                  {errors.state?.message}
                </small>
              )}
            </div>
            <div className="w-full px-4 mb-4">
              <input
                className={`border ${
                  errors.township
                    ? "border-red-600 bg-red-50"
                    : "bg-transparent border-0"
                } rounded-lg w-full shadow shadow-black p-4 `}
                {...register("township", {
                  required: "Township is required",
                })}
                name="township"
                onChange={handleChange}
                aria-invalid={errors.township ? "true" : "false"}
                placeholder="Township Name"
                value={township}
              />

              {errors.township && (
                <small role="alert" className="text-red-600">
                  {errors.township?.message}
                </small>
              )}
            </div>

            <div className="w-full flex gap-4 px-4 mb-4">
              <div className="w-full">
                <input
                  type="number"
                  className={`border ${
                    errors.death
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-4 `}
                  {...register("death", {
                    required: "Death number is required",
                  })}
                  name="death"
                  onChange={handleChange}
                  aria-invalid={errors.death ? "true" : "false"}
                  placeholder="Total death"
                  value={death}
                />

                {errors.death && (
                  <small role="alert" className="text-red-600">
                    {errors.death?.message}
                  </small>
                )}
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className={`border ${
                    errors.injured
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-4 `}
                  {...register("injured", {
                    required: "Injured number is required",
                  })}
                  name="injured"
                  onChange={handleChange}
                  aria-invalid={errors.injured ? "true" : "false"}
                  placeholder="Total injured "
                  value={injured}
                />

                {errors.injured && (
                  <small role="alert" className="text-red-600">
                    {errors.injured?.message}
                  </small>
                )}
              </div>
            </div>
            <div className="w-full flex gap-4 px-4 mb-4">
              <div className="w-full">
                <input
                  type="number"
                  className={`border ${
                    errors.time
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-4 `}
                  {...register("time", {
                    required: "Time number is required",
                  })}
                  name="time"
                  onChange={handleChange}
                  aria-invalid={errors.time ? "true" : "false"}
                  placeholder="Total time"
                  value={time}
                />

                {errors.time && (
                  <small role="alert" className="text-red-600">
                    {errors.time?.message}
                  </small>
                )}
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className={`border ${
                    errors.possible
                      ? "border-red-600 bg-red-50"
                      : "bg-transparent border-0"
                  } rounded-lg w-full shadow shadow-black p-4 `}
                  {...register("possible", {
                    required: "Possible number is required",
                  })}
                  name="possible"
                  onChange={handleChange}
                  aria-invalid={errors.possible ? "true" : "false"}
                  placeholder="Possible time"
                  value={possible}
                />

                {errors.possible && (
                  <small role="alert" className="text-red-600">
                    {errors.possible?.message}
                  </small>
                )}
              </div>
            </div>
            <div className="w-full flex px-4 justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-theme text-white p-4 mr-4 rounded-lg active:scale-75 transition-transform font-semibold"
              >
                Cancel
              </button>

              <button className="bg-theme text-white p-4 rounded-lg active:scale-75 transition-transform font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {alert && (
        <div className="flex justify-center w-full absolute bottom-4">
          <Alert
            className="w-full sm:w-2/3 md:w-1/2 "
            severity={severity}
            onClose={() => setAlert(false)}
          >
            {message}
          </Alert>
        </div>
      )}
    </>
  );
};

export default UpdateResearch;
