import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { InputBox } from "../../components";
import { FIB } from "../../data/listening/FIB";
const Fill_in_Blank = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");

  const replacePlaceholders = (text) => {
    const parts = text?.split("=====");
    return parts?.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <span className="inline-block">
            <InputBox />
          </span>
        )}
      </React.Fragment>
    ));
  };

  const processedQuestions = FIB.map((questionData) => {
    return {
      ...questionData,
      ques: replacePlaceholders(questionData.ques),
    };
  });

  const handleTextareaChange = (value) => {
    setTextareaValue(value);
  };
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => {};
  return (
    <>
      <QuestionComponent
        questions={processedQuestions}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        heading="Question Heading"
        type="FIB"
        textareaValue={textareaValue}
        onTextareaChange={handleTextareaChange}
      />
    </>
  );
};

export default Fill_in_Blank;
