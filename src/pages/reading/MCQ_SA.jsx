import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { MC_SA } from "../../data/reading/Mchoice_SinleAnswer";
import MCQ_Multiple_Comp from "./components/MCQ_Multiple_Comp";

const MCQ_SA = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => {};
  const currentQuestion = MC_SA[currentQuestionIndex];
  return (
    <QuestionComponent
      questions={MC_SA}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      type="mcq-2-single"
      renderComp={
        <MCQ_Multiple_Comp
          para={currentQuestion.para}
          ques={currentQuestion.ques}
          options={currentQuestion.ans}
          correct={currentQuestion.correct}
          multi={true}
        />
      }
    />
  );
};

export default MCQ_SA;
