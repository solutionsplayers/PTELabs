import React, { useState } from "react";

const HighlightText = ({ selectedArray, text, setSelectedArray }) => {
  const handleClick = (word, index) => {
    const newSelectedArray = [...selectedArray, { word, index }];
    setSelectedArray(newSelectedArray);
  };

  const renderTextWithHighlight = () => {
    return text.split(" ").map((word, index) => {
      return (
        <span
          key={index}
          onClick={() => handleClick(word, index)}
          className={`cursor-pointer ${
            selectedArray.some((item) => item.index === index)
              ? "bg-yellow-300"
              : ""
          }`}
        >
          {word + " "}
        </span>
      );
    });
  };

  return <div className="p-4">{renderTextWithHighlight()}</div>;
};

export default HighlightText;
