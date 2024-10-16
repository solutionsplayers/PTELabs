import React from "react";

const Summerize = () => {
  const wordsCount = parseInt(localStorage.getItem("wordCount"), 10);

  let message;
  let messageStyle;

  if (wordsCount >= 5 && wordsCount <= 75) {
    message = `You write ${wordsCount} words`;
    messageStyle = "text-2xl text-white font-semibold text-center mt-10";
  } else {
    message = "The length must be between 5 and 75";
    messageStyle = "text-red-600 text-center mt-10 text-2xl";
  }

  return (
    <div>
      <p className={messageStyle}>{message}</p>
    </div>
  );
};

export default Summerize;
