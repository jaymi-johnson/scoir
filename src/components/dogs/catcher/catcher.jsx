import React, { useState } from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";

const containerCss = {
  maxWidth: 500,
  margin: "auto",
  textAlign: "center",
};
const searchCss = {
  display: "flex",
  justifyContent: "space-between",
};
const randomCSS = {
  width: 500,
  margin: "12px 0",
};

const Catcher = ({ catchRandom, setCaught, options }) => {
  const [selected, setSelected] = useState(null);

  const handleInputChange = (e, value) => {
    setSelected(value);
  };

  const handleOnSearch = () => {
    // Only search if breed is populated - FUTURE: handle this with validation
    if (selected && options.includes(selected)) {
      setCaught(selected);
      setSelected(null);
    }
  };

  const handleOnBlur = () => {
    if (!options.includes(selected)) {
      // Text does not match a value, remove it
      setSelected(null);
    }
  };

  return (
    <Box sx={containerCss}>
      <Box sx={searchCss}>
        <Autocomplete
          sx={{ width: "80%" }}
          options={options}
          onInputChange={handleInputChange}
          value={selected}
          onBlur={handleOnBlur}
          renderInput={(params) => (
            <TextField {...params} label="Find a breed to catch" />
          )}
        />
        <Button
          variant="contained"
          onClick={handleOnSearch}
          disabled={!selected || !options.includes(selected)}
        >
          Search
        </Button>
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        onClick={catchRandom}
        sx={randomCSS}
      >
        Catch A Random Breed
      </Button>
    </Box>
  );
};

export default Catcher;
