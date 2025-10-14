import React from "react";
import { Stack, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HeaderFilter = () => {
  return (
    <>
      <Stack className="search-box">
        {/* === Select Box Section === */}
        <Stack className="select-box">
          <Box component="div" className="box on">
            <span>Location</span>
            <ExpandMoreIcon />
          </Box>

          <Box component="div" className="box">
            <span>Property type</span>
            <ExpandMoreIcon />
          </Box>

          <Box component="div" className="box">
            <span>Rooms</span>
            <ExpandMoreIcon />
          </Box>
        </Stack>

        {/* === Advanced Filter + Search Button Section === */}
        <Stack className="search-box-other">
          <Box className="advanced-filter">
            <img src="/img/icons/tune.svg" alt="Advanced Filter" />
            <span>Advanced</span>
          </Box>

          <Box className="search-btn">
            <img src="/img/icons/search_white.svg" alt="Search Button" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderFilter;