import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { incorrect_words } from "../../data/listening/h_in_words";

const Highlight_incorrect = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => {};
  return (
    <QuestionComponent
      questions={incorrect_words}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      heading="You will hear a recording. Click on the paragraph that best relates to the recording."
      type="highlight"
    />
  );
};

export default Highlight_incorrect;
