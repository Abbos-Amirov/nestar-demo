"use client";

import { useState } from "react";

const Community = () => {


    console.log("KEldi buyaerga");
    
  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      COMMUNITY {title}
      <button
        onClick={() => alert("Hello MIT")}
        style={{ margin: "15px" }}
      >
        Press Me
      </button>
    </div>
  );
};

export default Community;