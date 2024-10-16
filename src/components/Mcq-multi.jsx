import React, { useState, useEffect } from "react";

const CheckboxList = ({ question, options, reset, multi }) => {
  const [checkedItems, setCheckedItems] = useState(
    options.reduce((acc, option) => ({ ...acc, [option]: false }), {})
  );

  useEffect(() => {
    setCheckedItems(
      options.reduce((acc, option) => ({ ...acc, [option]: false }), {})
    );
  }, [reset, options]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (multi) {
      // Allow multiple selections
      setCheckedItems((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      // Only allow one checkbox to be selected at a time
      setCheckedItems(
        options.reduce(
          (acc, option) => ({ ...acc, [option]: option === name && checked }),
          {}
        )
      );
    }
  };

  return (
    <div className="p-4">
      <p className="text-left text-lg font-semibold mb-5">{question}</p>
      <div className="flex flex-col space-y-2">
        {Object.keys(checkedItems).map((key) => (
          <label key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={key}
              checked={checkedItems[key]}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700 capitalize">{key}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
