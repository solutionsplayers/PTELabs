import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { Multiple_Choice } from "../../data/reading/Mchoise_Manswer";
import MCQ_Multiple_Comp from "./components/MCQ_Multiple_Comp";

const MCQ_MA = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => {};
  const currentQuestion = Multiple_Choice[currentQuestionIndex];
  return (
    <QuestionComponent
      questions={Multiple_Choice}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      onStop={handleStop}
      type="mcq-2"
      renderComp={
        <MCQ_Multiple_Comp
          para={currentQuestion.para}
          ques={currentQuestion.ques}
          options={currentQuestion.ans}
          correct={currentQuestion.correct}
        />
      }
    />
  );
};

export default MCQ_MA;
