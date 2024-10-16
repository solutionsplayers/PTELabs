import React from "react";

const Render_Spoken = ({ ques, current, value }) => {
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "10px auto" }}>
      <audio controls style={{ width: "100%" }}>
        <source src={ques[current].src} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <div>
        <h1 className="text-white text-2xl mt-4">Your answer:</h1>
        <p className="text-[#808080]">{value}</p>
      </div>
    </div>
  );
};

export default Render_Spoken;
