import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { essay } from "../../data/writting/essay/essay";
import EssayAnswer from "./components/EssayAnswer";

const Essay = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");

  const handleNext = (index) => {
    if (index < essay.length) {
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
        heading="You will have 20 minutes to plan, write and revise an essay about the topic below. You response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200 - 300 words."
        questions={essay}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        type="textBox"
        textareaValue={textareaValue}
        onTextareaChange={setTextareaValue}
        renderComp={<EssayAnswer text={textareaValue} />}
      />
    </div>
  );
};

export default Essay;
