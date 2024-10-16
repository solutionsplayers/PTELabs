import React from "react";
import { Drag_Drop } from "../../../data/reading/fb_Drag_Drop";
import { useSelector } from "react-redux";

const FIB_DND_COMP = ({ current }) => {
  const answers = useSelector((state) => state.fib.droppable_fields);
  const replacePlaceholders = (text, correctArray) => {
    const parts = text.split(/(----)/g);
    let correctIndex = 0;

    return parts.map((part, index) => {
      if (part === "----") {
        const correctAnswer =
          correctIndex < correctArray?.length ? correctArray[correctIndex] : "";
        correctIndex++;
        return (
          <>
            <span
              key={index}
              style={{
                backgroundColor: "lightblue",
                padding: "2px 4px",
                borderRadius: "4px",
                color: "black",
              }}
            >
              {correctAnswer.toUpperCase()}
            </span>
            <span
              className="bg-red-400"
              style={{
                padding: "2px 4px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              {answers[correctIndex - 1]?.value || ""}
            </span>
          </>
        );
      }
      return part;
    });
  };

  const processedQuestions = Drag_Drop.map((question) => {
    const correctArray = question.correct;
    const quesParts = question.ques.split(/(----)/g);
    const processedQues = replacePlaceholders(quesParts.join(""), correctArray);
    return {
      ...question,
      ques: processedQues,
    };
  });
  return (
    <div>
      <strong className="text-center mb-5">Your Answer 0 / 4</strong>
      <p className="text-[#808080]">{processedQuestions[current].ques}</p>
    </div>
  );
};

export default FIB_DND_COMP;
