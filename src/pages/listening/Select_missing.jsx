import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { select_missing } from "../../data/listening/select_missing";

const Select_missing = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => {};

  return (
    <QuestionComponent
      questions={select_missing}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      heading="You will hear a recording. At the end of the recording the last word or group of words has been replaced by a beep. Select the correct option to complete the recording."
      type="radio"
    />
  );
};

export default Select_missing;
