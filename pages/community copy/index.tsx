import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import React  from "react";

const Community: NextPage= () => {  
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
        <Stack className="container">Communtiy</Stack>
        </div>
  );
};

export default withLayoutBasic(Community)