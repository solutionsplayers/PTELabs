import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionComponent from "../../components/QuestionComponent";
import { read_write_FIB } from "../../data/reading/read_write_FIB";
import DropDownFread from "../../components/DropDownFRead";
import { setId, setSelectedOptions } from "../../store/features/reading/FIB_Slice";
import Fill_In_Blanks_Comp from "./components/Fill_In_Blanks_Comp";

const R_W_FIB = () => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");

  const [selectedOptions, setSelectedOptionsState] = useState([]);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    dispatch(setId(currentQuestionIndex));

    if (read_write_FIB[currentQuestionIndex].ans) {
      const initialOptions = read_write_FIB[currentQuestionIndex].ans.map((_, index) => ({ ind: index, val: "" }));
      setSelectedOptionsState(initialOptions);
      dispatch(setSelectedOptions(initialOptions)); // Store initial options in Redux
    }
  }, [currentQuestionIndex, dispatch]);

  const handleOptionSelect = (index, value) => {
    const updatedOptions = selectedOptions.map((option, idx) =>
      idx === index ? { ind: index, val: value } : option
    );
    setSelectedOptionsState(updatedOptions);
    dispatch(setSelectedOptions(updatedOptions)); // Update Redux state
  };

  const replacePlaceholders = (text, optionsArray) => {
    const parts = text.split(/(=====)/g);
    let optionIndex = 0;

    return parts.map((part, index) => {
      if (part === "=====") {
        const options =
          optionIndex < optionsArray.length ? optionsArray[optionIndex++] : [];
        return (
          <DropDownFread
            key={index}
            options={options}
            onSelect={(value) => {
              const placeholderIndex = Math.floor((index - 1) / 2);
              handleOptionSelect(placeholderIndex, value);
              setCurrentPlaceholderIndex(placeholderIndex);
            }}
          />
        );
      }
      return part;
    });
  };

  const processedQuestions = read_write_FIB.map((question) => {
    const optionsArray = question.ans;
    const quesParts = question.ques.split(/(=====)/g);
    const processedQues = replacePlaceholders(quesParts.join(""), optionsArray);

    return {
      ...question,
      ques: processedQues,
    };
  });

  const handleNext = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleStop = () => { };

  const handleTextareaChange = (value) => {
    setTextareaValue(value);
  };

  return (
    <>
      <QuestionComponent
        questions={processedQuestions}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onStop={handleStop}
        heading="Question Heading"
        type="FIB"
        textareaValue={textareaValue}
        onTextareaChange={handleTextareaChange}
        renderComp={<Fill_In_Blanks_Comp />}
      />
    </>
  );
};

export default R_W_FIB;
