import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser_selected } from "../store/features/reading/MCQ_Slice";

function MCQ_Component({
  para,
  ques,
  options,
  multi = true,
  checked = false,
  correct = [],
  ans,
}) {
  const [selectedOptions, setSelectedOptions] = useState(multi ? [] : "");
  const [userSelected, setUserSelected] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checked) {
      if (multi) {
        setSelectedOptions(
          options?.filter((option) => correct?.includes(option))
        );
      } else {
        setSelectedOptions(correct[0] || " ");
      }
    }
  }, [checked, options, correct, multi]);

  const handleChange = (option) => {
    if (multi) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions?.filter((item) => item !== option));
        setUserSelected(userSelected?.filter((item) => item !== option));
        dispatch(
          setUser_selected(userSelected?.filter((item) => item !== option))
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
        setUserSelected([...userSelected, option]);
        dispatch(setUser_selected([...userSelected, option]));
      }
    } else {
      setSelectedOptions(option);
      setUserSelected([option]);
      dispatch(setUser_selected([option]));
    }
  };

  return (
    <div className="flex p-4 bg-gray-50">
      {para &&
        <div className="w-full pr-4">
          <p className="text-justify text-[13px]">{para}</p>
        </div>
      }
      <div className="w-full pl-4 flex flex-col">
        <h4 className="font-semibold mb-2 text-[15px]">
          {!checked && "Read the text and answer the question by selecting"}
          {multi && !checked
            ? "all the correct responses"
            : checked
              ? " "
              : "one correct response"}

        </h4>
        {ans && (
          <h5 className="font-semibold mb-2 text-[15px] text-black">
            <i>{ans}</i>
          </h5>
        )}
        <p className="mb-4 text-[15px]">{ques}</p>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type={multi ? "checkbox" : "radio"}
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={
                multi
                  ? selectedOptions.includes(option)
                  : selectedOptions === option
              }
              onChange={() => handleChange(option)}
              name={multi ? undefined : "singleSelect"}
              disabled={checked}
            />
            <label className="ml-2 text-gray-700 text-[15px]">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MCQ_Component;
