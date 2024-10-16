import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { MC_SA } from "../../data/reading/Mchoice_SinleAnswer";

const Mcq_single = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleStop = () => {};
  return (
    <QuestionComponent
      questions={MC_SA}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      heading="Listen to the recording and answer the multi-choice question by selecting the correct response. Only one response is correct."
      type="mcq"
    />
  );
};

export default Mcq_single;
