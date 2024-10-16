import React from "react";
import { useSelector } from "react-redux";
import { read_write_FIB } from "../../../data/reading/read_write_FIB";

const Fill_In_Blanks_Comp = () => {
  const current = useSelector((state) => state.fib.id);
  const selectedOptions = useSelector((state) => state.fib.selectedoptions);
  const filteredSelectedOptions = selectedOptions?.filter(
    (option) => option.val
  );
  const replacePlaceholders = (text, correctArray) => {
    const parts = text.split(/(=====)/g);
    let correctIndex = 0;

    return parts.map((part, index) => {
      if (part === "=====") {
        const correctAnswer =
          correctIndex < correctArray.length ? correctArray[correctIndex] : "";
        correctIndex++;

        return (
          <React.Fragment key={index}>
            <span
              style={{
                backgroundColor: "lightblue",
                padding: "2px 4px",
                borderRadius: "4px",
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
              {filteredSelectedOptions[correctIndex - 1]?.val || ""}
            </span>
          </React.Fragment>
        );
      }
      return part;
    });
  };

  const currentQuestion = read_write_FIB[current] || {};
  const correctArray = currentQuestion.correct || [];
  const quesParts = currentQuestion.ques
    ? currentQuestion.ques.split(/(=====)/g)
    : [];
  const processedQues = replacePlaceholders(quesParts.join(""), correctArray);
  const selectedCount = filteredSelectedOptions.length;
  const totalCount = correctArray.length;

  return (
    <div className="flex items-center justify-center">
      <div className="w-2/3 bg-white m-5 p-5 ">
        <strong className="text-center mb-5">
          Your Answer {selectedCount} / {totalCount}
        </strong>
        <div>
          <h4>Question with Correct Answers:</h4>
          <p>{processedQues}</p>
        </div>
      </div>
    </div>
  );
};

export default Fill_In_Blanks_Comp;
