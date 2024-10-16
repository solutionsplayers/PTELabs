import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { Multiple_Choice } from "../../data/reading/Mchoise_Manswer";
const Mcq_multiple = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleStop = () => {};

  return (
    <QuestionComponent
      questions={Multiple_Choice}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      heading="Listen to the recording and answer the question by selecting all the correct responses. You will need to select more than one response."
      type="mcq"
      multi={true}
    />
  );
};

export default Mcq_multiple;
