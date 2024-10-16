import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { highlight_summary } from "../../data/listening/Highlight_summary";

const Highlight_summary = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => {};

  return (
    <QuestionComponent
      questions={highlight_summary}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      heading="You will hear a recording. Click on the paragraph that best relates to the recording."
      type="radio"
    />
  );
};

export default Highlight_summary;
