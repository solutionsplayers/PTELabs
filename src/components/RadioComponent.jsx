import React, { useState } from "react";

const RadioComponent = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="p-4">
        <div className="space-y-2">
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleRadioChange(option)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioComponent;
