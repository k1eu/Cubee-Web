import Timer from "components/timer";
import React from "react";

export const Home = () => {
  return (
     <div className="flex flex-col items-center justify-center space-y-10 max-w-screen max-h-screen h-screen w-screen overflow-hidden relative">
       <Timer />
     </div>
  );
};


export default Home