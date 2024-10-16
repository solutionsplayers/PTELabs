import React from "react";
import MCQ_Component from "../../../components/MCQ_Component";
import { useSelector } from "react-redux";
const MCQ_Multiple_Comp = ({ options, correct }) => {
  const userSelected = useSelector((state) => state.mcq.user_selected);
  return (
    <div
      className="bg-answerbg flex items-center justify-center"
    >
      <div className="bg-white text-black flex m-10">
        <div className="w-1/2 ">
          <MCQ_Component
            options={options}
            checked={true}
            correct={correct}
            ans="Correct Answers"
          // multi={false}
          />
        </div>
        <div className="w-1/2">
          <MCQ_Component
            options={options}
            checked={true}
            correct={userSelected}
            ans="Your Answers"
          // multi={false}
          />
        </div>
      </div>

    </div>
  );
};

export default MCQ_Multiple_Comp;
