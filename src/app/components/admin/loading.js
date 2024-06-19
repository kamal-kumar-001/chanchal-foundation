import React from "react";
import MainLayout from "./Mainlayout";

const Loading = () => {
  return (
    <MainLayout>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="animate-pulse">
        {" "}
        <div className="w-20 h-20 bg-[#ff5722]/80 rounded-full"></div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Loading;