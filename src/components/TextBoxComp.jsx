import React, { useEffect, useRef, useState } from "react";
import CustomTimer from "./CustomTimer";

const TextBoxComp = ({
  textareaRef,
  textareaValue,
  onTextareaChange,
  currentQuestionIndex,
}) => {
  const [wordCount, setWordCount] = useState(0);

  const calculateWordCount = (text) => {
    return text ? text.trim().split(/\s+/).length : 0;
  };

  useEffect(() => {
    const count = calculateWordCount(textareaValue);
    setWordCount(count);
    localStorage.setItem("wordCount", count);
  }, [textareaValue]);

  useEffect(() => {
    const savedWordCount = localStorage.getItem("wordCount");
    if (savedWordCount) {
      setWordCount(Number(savedWordCount));
    }
  }, []);

  const handleCut = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("cut");
    }
  };

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
    }
  };

  const handlePaste = async () => {
    if (textareaRef.current) {
      try {
        const text = await navigator.clipboard.readText();
        const { selectionStart, selectionEnd } = textareaRef.current;
        const currentText = textareaValue || "";
        const newText =
          currentText.slice(0, selectionStart) +
          text +
          currentText.slice(selectionEnd);
        onTextareaChange(newText);
      } catch (err) {
        console.error("Failed to read clipboard contents: ", err);
      }
    }
  };

  const handleTimeUp = () => {
    onNext(currentQuestionIndex + 1);
    onTextareaChange("");
  };

  return (
    <div className="relative">
      <div className="text-right mb-2">
        <span className="text-gray-600">Word Count: {wordCount}</span>
      </div>
      <textarea
        ref={textareaRef}
        className="mt-4 w-full h-52 p-2 border border-gray-300 rounded-md"
        placeholder="Your answer here..."
        value={textareaValue}
        onChange={(e) => onTextareaChange(e.target.value)}
      ></textarea>
      <div className="flex justify-between mt-2">
        <div>
          <button
            className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-md hover:bg-gray-100"
            onClick={handleCut}
          >
            Cut
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-md hover:bg-gray-100"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <button
              className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-md hover:bg-gray-100"
              onClick={handlePaste}
            >
              Paste
            </button>
          </div>
          <div>
            <CustomTimer
              onTimeUp={handleTimeUp}
              currentQuestionIndex={currentQuestionIndex}
              startTime={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBoxComp;
