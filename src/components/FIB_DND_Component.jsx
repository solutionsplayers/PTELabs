import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { set_Fields } from "../store/features/reading/FIB_Slice";

const ItemTypes = {
  OPTION: "option",
};

const DraggableItem = ({ option, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.OPTION,
    item: { option, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`text-sm py-1 bg-blue-500 text-white rounded shadow cursor-pointer mb-2 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {option}
    </div>
  );
};

const DroppableField = ({ fieldIndex, item, onDrop }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.OPTION,
    drop: (draggedItem) => onDrop(draggedItem, fieldIndex),
  });

  return (
    <div
      ref={drop}
      className="p-1 border border-gray-300 rounded min-w-[100px] h-[30px] flex items-center justify-center mx-1"
    >
      {item || "Drop here"}
    </div>
  );
};

const TextWithPlaceholders = ({
  text,
  fields,
  setFields,
  removeOption,
  restoreOption,
  onFieldsChange,
}) => {
  const placeholders = text.split("----");

  return (
    <div className="items-center flex-wrap gap-5">
      {placeholders.map((part, index) => (
        <React.Fragment key={index}>
          <span>{part}</span>
          {index < placeholders.length - 1 && (
            <span className="inline-block py-1">
              <DroppableField
                fieldIndex={index}
                item={fields[index]}
                onDrop={(draggedItem, fieldIndex) => {
                  const updatedFields = [...fields];
                  if (fields[fieldIndex]) {
                    restoreOption(fields[fieldIndex]);
                  }
                  updatedFields[fieldIndex] = draggedItem.option;
                  setFields(updatedFields);

                  removeOption(draggedItem.index);

                  // Call onFieldsChange to log the dropped values with their indices
                  onFieldsChange(
                    updatedFields.map((field, idx) => ({
                      index: idx,
                      value: field,
                    }))
                  );
                }}
              />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const DragAndDrop = ({ questions, currentQuestion }) => {
  const [fields, setFields] = useState([]);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (questions && questions.length > 0) {
      const questionData = questions[currentQuestion];
      setFields(
        questionData.ques
          .split("----")
          .slice(0, -1)
          .map(() => null)
      );
      setOptions(questionData.ans);
    }
  }, [questions, currentQuestion]);

  const removeOption = (index) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  const restoreOption = (option) => {
    setOptions((prevOptions) => [...prevOptions, option]);
  };

  const handleFieldsChange = (fieldsWithIndices) => {
    dispatch(set_Fields(fieldsWithIndices));
    // console.log("Dropped fields:", fieldsWithIndices);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-8">
        {questions && questions.length > 0 && (
          <div className="mb-8">
            <TextWithPlaceholders
              text={questions[currentQuestion].ques}
              fields={fields}
              setFields={setFields}
              removeOption={removeOption}
              restoreOption={restoreOption}
              onFieldsChange={handleFieldsChange}
            />
            <div className="p-2 border border-gray-300 rounded mb-4 min-h-[150px]">
              <div className="grid grid-cols-12 space-x-4">
                {options.map((option, index) => (
                  <div className="col-span-2" key={index}>
                    <DraggableItem option={option} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default DragAndDrop;
