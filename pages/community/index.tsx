import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage= () => {  

  const device = useDeviceDetect();
  if(device === "mobile"){

    return <Stack  className="footer-container">COMMUNITY MOBILE</Stack>

  }else{

    return (
      <div style={{margin:"30px 0"}}>
          <Stack className="container">Communtiy</Stack>
          </div>
    );
  }
  
  
};

export default withLayoutBasic(Community)