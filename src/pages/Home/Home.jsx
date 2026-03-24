import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-black tracking-tighter text-neutral-900">
          Shuru Tech
        </h1>
        <p className="text-xl text-neutral-500 font-medium">
          Building the future with speed and precision.
        </p>
      </div>
    </div>
  );
};

export default Home;
