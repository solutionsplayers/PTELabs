import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { reorder_paragraph } from "../../data/reading/re-order-paragraph";
import Re_Order_comp from "./components/Re_Order_comp";

const Re_Order = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");

  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleStop = () => {};

  const handleTextareaChange = (value) => {
    setTextareaValue(value);
  };
  const currentQuestion = reorder_paragraph[currentQuestionIndex];
  console.log(currentQuestion.correct, "hhhhhh");
  return (
    <div>
      <QuestionComponent
        questions={reorder_paragraph}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        heading="Re-Order the Paragraph"
        type="Re_Order"
        textareaValue={textareaValue}
        onTextareaChange={handleTextareaChange}
        renderComp={
          <Re_Order_comp
            data={reorder_paragraph}
            current={currentQuestionIndex}
          />
        }
      />
    </div>
  );
};

export default Re_Order;
