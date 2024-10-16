import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { summerize_spoken } from "../../data/listening/summerize_spoken";
import Render_Spoken from "./components/Render_Spoken";
const Fill_in_Blank = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [value, setValue] = useState("");
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };
  const handleStop = () => { };
  return (
    <>
      <QuestionComponent
        questions={summerize_spoken}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        heading=" You will hear a lecture. Write a summary for a fellow student who was not present at the lecture. You should write 50-70 words. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the lecture. "
        type="summerize"
        setValue={setValue}
        renderComp={
          <Render_Spoken
            ques={summerize_spoken}
            current={currentQuestionIndex}
            value={value}
          />
        }
      />
    </>
  );
};

export default Fill_in_Blank;
