import React from "react";
const Preloader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-brand border-t-transparent"></div>
    </div>
  );
};

export default Preloader;
