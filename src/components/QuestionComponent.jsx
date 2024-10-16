import React, { useRef, useState, Suspense, lazy } from "react";
import CustomTimer from "./CustomTimer";
import { useLocation } from "react-router-dom";
import DragDropComponent from "./Re-order_DND";
import AnswerComponent from "./AnswerComponent";
import Sumerize_Comp from "./Sumerize_Comp";
import VoiceRecorder from "./VoiceRecorder";
import DescribeImageCom from '../components/DescribeImageCom'

const RadioComponent = lazy(() => import("./RadioComponent"));
const DragAndDrop = lazy(() => import("./FIB_DND_Component"));
const MCQ_Component = lazy(() => import("./MCQ_Component"));
const CheckboxList = lazy(() => import("./Mcq-multi"));
const Highlighter = lazy(() => import("./Highlighter"));
const TextBoxComp = lazy(() => import("./TextBoxComp"));

const QuestionComponent = ({
  questions,
  currentQuestionIndex,
  onNext,
  onStop,
  heading,
  type,
  textareaValue,
  onTextareaChange,
  multi = false,
  btn = "Check",
  renderComp,
  setValue,
}) => {
  const textareaRef = useRef(null);
  const answerRef = useRef(null);
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedArray, setSelectedArray] = useState([]);
  const [showAnswerComponent, setShowAnswerComponent] = useState(false);
  const location = useLocation();

  const handleNext = () => {
    setSelectedArray([]);
    if (currentQuestionIndex < questions.length - 1) {
      onNext(currentQuestionIndex + 1);
    } else {
      onNext(0);
    }
    if (onTextareaChange) {
      onTextareaChange("");
    }
  };

  const handleStopToggle = () => {
    setShowAnswerComponent((prevShow) => !prevShow);
    if (!showAnswerComponent) {
      setTimeout(() => {
        if (answerRef.current) {
          answerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-full relative pt-4">
      <div className="flex-grow text-center w-full px-20">
        <div className="mb-4 p-4 bg-gray-50">
          <h1 className="text-lg font-semibold mb-10 text-black">{heading}</h1>
          <Suspense fallback={<div>Loading...</div>}>
            {type === "radio" && (
              <RadioComponent options={currentQuestion.options} />
            )}
            {type === "FIB_DND" && (
              <DragAndDrop
                questions={questions}
                currentQuestion={currentQuestionIndex}
              />
            )}
            {type === "mcq-2" && (
              <MCQ_Component
                para={currentQuestion.para}
                ques={currentQuestion.ques}
                options={currentQuestion.ans}
                multi={true}
              />
            )}
            {type === "summerize" && (
              <Sumerize_Comp
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                setValue={setValue}
              />
            )}

            {type === "img" && (
              <DescribeImageCom
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                setValue={setValue}
              />
            )}


            {type === "mcq-2-single" && (
              <MCQ_Component
                para={currentQuestion.para}
                ques={currentQuestion.ques}
                options={currentQuestion.ans}
                multi={false}
              />
            )}
            {type === "mcq" && (
              <CheckboxList
                question={currentQuestion.ques}
                options={currentQuestion.ans}
                multi={multi}
              />
            )}
            {(type === "text" || type === "textBox") && currentQuestion?.ques}
            {type === "highlight" && (
              <Highlighter
                text={currentQuestion?.ques}
                selectedArray={selectedArray}
                setSelectedArray={setSelectedArray}
              />
            )}
            {type === "FIB" && questions[currentQuestionIndex].ques}
            {type === "textBox" && (
              <TextBoxComp
                textareaRef={textareaRef}
                textareaValue={textareaValue}
                onTextareaChange={onTextareaChange}
                currentQuestionIndex={currentQuestionIndex}
              />
            )}
            {type === "Re_Order" && (
              <DragDropComponent
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
              />
            )}


          </Suspense>
        </div>
      </div>

      {showAnswerComponent && (
        <div ref={answerRef}>
          <AnswerComponent renderComp={renderComp} />
        </div>
      )}

      {location.pathname === "/read-aloud" && (
        <VoiceRecorder ques={currentQuestion?.ques} />
        // <VoiceRecorder />
      )}
      <div className="flex items-center h-[10vh] bg-body1 w-full justify-between sticky bottom-0">
        <div></div>
        <div>
          <button
            className="mx-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={handleStopToggle}
          >
            {showAnswerComponent ? "Try Again" : btn}
          </button>
        </div>
        <div className="flex gap-3 pr-22">
          <select
            className="mr-2 border-none p-2 bg-body1"
            value={currentQuestionIndex + 1}
            onChange={(e) => onNext(parseInt(e.target.value) - 1)}
          >
            {questions.map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <button
            className="px-4 py-2 bg-[#053742] text-white rounded-md hover:bg-blue-600 shadow-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
