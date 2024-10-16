import React from "react";

const CustomButton = ({ onClick, children, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-red ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
