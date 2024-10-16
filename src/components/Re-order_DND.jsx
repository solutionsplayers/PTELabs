import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CustomTimer from "./CustomTimer";
import { useDispatch } from "react-redux";
import { set_right_items } from "../store/features/reading/FIB_Slice";

const ItemType = "BOX_ITEM";

// DraggableItem component
const DraggableItem = ({ item, index, type, isSelected, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { item, index, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      onClick={onClick}
      className={`p-2 mb-2 bg-white border ${
        isSelected ? "border-2 border-black" : "border-gray-200"
      } rounded shadow-sm ${isDragging ? "opacity-50" : "opacity-100"}`}
      style={{ cursor: "grab" }}
    >
      {item}
    </div>
  );
};

// DroppableBox component
const DroppableBox = ({
  items,
  setItems,
  otherItems,
  setOtherItems,
  type,
  allowReorder,
  selectedIndex,
  setSelectedIndex,
}) => {
  const [, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (draggedItem) => {
      if (draggedItem.type !== type) {
        setItems((prevItems) => [...prevItems, draggedItem.item]);
        setOtherItems((prevItems) =>
          prevItems.filter((_, itemIndex) => itemIndex !== draggedItem.index)
        );
      } else if (allowReorder) {
        const reorderedItems = [...items];
        const [movedItem] = reorderedItems.splice(draggedItem.index, 1);
        reorderedItems.splice(draggedItem.index, 0, movedItem);
        setItems(reorderedItems);
      }
    },
  }));

  return (
    <div
      ref={drop}
      className="w-1/2 p-2 border border-gray-300 rounded min-h-[200px] flex flex-col"
    >
      {items.length > 0 ? (
        items.map((item, index) => (
          <DraggableItem
            key={index}
            item={item}
            index={index}
            type={type}
            isSelected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        ))
      ) : (
        <div className="text-gray-500 italic">Drop items here</div>
      )}
    </div>
  );
};

// Main DragDropComponent
const DragDropComponent = ({ questions, currentQuestionIndex }) => {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      setLeftItems(currentQuestion.para);
      setRightItems([]);
      setSelectedIndex(null);
      setSelectedBox(null);
    }
  }, [questions, currentQuestionIndex]);

  useEffect(() => {
    dispatch(set_right_items(rightItems));
    // console.log("Items in left box:", rightItems);
  }, [rightItems]);

  const moveToRight = () => {
    if (
      selectedBox === "left" &&
      selectedIndex !== null &&
      leftItems[selectedIndex]
    ) {
      setRightItems([...rightItems, leftItems[selectedIndex]]);
      setLeftItems(leftItems.filter((_, i) => i !== selectedIndex));
      setSelectedIndex(null);
    }
  };

  const moveToLeft = () => {
    if (
      selectedBox === "right" &&
      selectedIndex !== null &&
      rightItems[selectedIndex]
    ) {
      setLeftItems([...leftItems, rightItems[selectedIndex]]);
      setRightItems(rightItems.filter((_, i) => i !== selectedIndex));
      setSelectedIndex(null);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center items-start h-full space-x-8">
        <CustomTimer startTime={180} />
        <DroppableBox
          items={leftItems}
          setItems={setLeftItems}
          otherItems={rightItems}
          setOtherItems={setRightItems}
          type="left"
          allowReorder={false}
          selectedIndex={selectedBox === "left" ? selectedIndex : null}
          setSelectedIndex={(index) => {
            setSelectedIndex(index);
            setSelectedBox("left");
          }}
        />
        <div className="flex flex-col justify-center items-center space-y-2">
          <button
            onClick={moveToRight}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            →
          </button>
          <button
            onClick={moveToLeft}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            ←
          </button>
        </div>
        <DroppableBox
          items={rightItems}
          setItems={setRightItems}
          otherItems={leftItems}
          setOtherItems={setLeftItems}
          type="right"
          allowReorder={true}
          selectedIndex={selectedBox === "right" ? selectedIndex : null}
          setSelectedIndex={(index) => {
            setSelectedIndex(index);
            setSelectedBox("right");
          }}
        />
      </div>
    </DndProvider>
  );
};

export default DragDropComponent;
