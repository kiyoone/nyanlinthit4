import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Filter = ({
  limit,
  setLimit,
  sortDirection,
  setSortDirection,
  keyword,
  setKeyword,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-around px-6 gap-3">
      <div className="flex sm:justify-center items-center justify-between  sm:w-fit">
        <TextField
          id="standard-basic"
          fullWidth
          label="Search"
          variant="standard"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="flex sm:justify-center justify-between items-end">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <TextField
            variant="standard"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            value={limit}
            defaultValue={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Order By
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={sortDirection}
            defaultValue={sortDirection}
            label="20"
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <MenuItem value={"latest"}>Latest</MenuItem>
            <MenuItem value={"earliest"}>Earliest</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
