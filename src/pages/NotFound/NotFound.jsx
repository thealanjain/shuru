import React from "react";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 space-y-4">
      <h1 className="text-8xl font-black text-neutral-200">404</h1>
      <p className="text-xl text-neutral-500 font-medium">Page Not Found</p>
      <a href="/" className="text-blue-600 hover:underline font-semibold">
        Return Home
      </a>
    </div>
  );
};

export default NotFound;
