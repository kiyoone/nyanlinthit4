import { Avatar, Grid, Typography, CircularProgress } from "@mui/material";
import React from "react";
import { useGetScribersQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const Subscribers = () => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isError } = useGetScribersQuery();
  if (isError) navigate("../error");
  return (
    <div className="p-5 sm:p-12 pt-0 sm:pt-0 ">
      <div className="text-center p-10 tmd:ext-4xl sm:text-3xl text-xl font-semibold ">
        Subscribers
      </div>
      <Grid container spacing={2}>
        {isLoading && (
          <div className="h-screen w-full rounded bg-transparent flex items-center justify-center top-0 left-0">
            <div className="p-12 bg-gray-100 rounded-lg">
              <CircularProgress />
            </div>
          </div>
        )}
        {isSuccess &&
          data?.subscribes?.map((subscriber) => (
            <Grid item sm={6} xs={12}>
              <div className="flex items-center  gap-4 border border-black rounded-md p-2 overflow-auto">
                <Avatar {...stringAvatar(subscriber.name)} />
                <div>
                  <Typography>{subscriber.name}</Typography>
                  <Typography>{subscriber.email}</Typography>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Subscribers;
