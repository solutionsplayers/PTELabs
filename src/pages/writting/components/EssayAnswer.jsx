import React from "react";

const EssayAnswer = ({ text }) => {
  console.log(text, "THIS ISSSSSSS");
  const wordsCount = parseInt(localStorage.getItem("wordCount"), 10);
  return (
    <div className="bg-answerbg h-full flex items-center justify-center">
      <div className="bg-white w-1/2 p-5">
        <h2 className="text-xl text-black font-bold text-center">
          Your Response
        </h2>
        <div className="flex items-top justify-between w-full gap-5 pt-5">
          <div className="w-1/2 flex flex-col gap-3">
            <h2 className="text-xl text-black font-bold text-center bg-[#D3D3D3]">
              From
            </h2>
            <p>You wrote {wordsCount} words. You should write 200-300 words.</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <h2 className="text-xl text-black font-bold text-center bg-[#D3D3D3]">
              Spelling
            </h2>
            <p>Good, no spelling errors detected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssayAnswer;
