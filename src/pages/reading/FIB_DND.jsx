import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { Drag_Drop } from "../../data/reading/fb_Drag_Drop";
import FIB_DND_COMP from "./components/FIB_DND_COMP";
import { useDispatch } from "react-redux";
import { clear_fields } from "../../store/features/reading/FIB_Slice";

const FIB_DND = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
    dispatch(clear_fields());
  };
  const handleStop = () => {};
  //here
  return (
    <QuestionComponent
      questions={Drag_Drop}
      currentQuestionIndex={currentQuestionIndex}
      onNext={handleNext}
      heading="In the text below, some words are missing. Drag words from the box below to appropriate place in the text. To undo an answer choice, drag the word back to the box below the text."
      onStop={handleStop}
      type="FIB_DND"
      renderComp={<FIB_DND_COMP current={currentQuestionIndex} />}
    />
  );
};

export default FIB_DND;
