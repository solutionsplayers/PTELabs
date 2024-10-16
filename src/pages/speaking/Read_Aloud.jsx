import React, { useState } from "react";
import QuestionComponent from "../../components/QuestionComponent";
import { read_aloud } from "../../data/readAloud/readalod";
import ResultComponent from "../../components/ResultComp/ResultComponent";
const Read_Aloud = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (index) => {
    if (index < read_aloud.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleStop = () => {
    console.log("Stop clicked");
  };
  return (
    <div>
      <QuestionComponent
        heading="Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud."
        questions={read_aloud}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        type="text"
      />
    </div>
  );
};

export default Read_Aloud;
