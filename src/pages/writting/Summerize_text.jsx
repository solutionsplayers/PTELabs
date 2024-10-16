import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { summerize_text } from "../../data/writting/summerize_text/summerize_text";
import Summerize from "./components/Summerize";

const Summerize_text = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");

  const handleNext = (index) => {
    if (index < summerize_text.length) {
      setCurrentQuestionIndex(index);
      setTextareaValue("");
    }
  };

  const handleStop = () => {
    console.log("Stop clicked");
  };

  return (
    <div>
      <QuestionComponent
        heading="Read the passage below and summarize it using your own sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. You response will be judged on the quality of your writing and how well your response presents the key points in the passage."
        questions={summerize_text}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        type="textBox"
        textareaValue={textareaValue}
        onTextareaChange={setTextareaValue}
        btn="Check"
        renderComp={<Summerize />}
      />
    </div>
  );
};

export default Summerize_text;
