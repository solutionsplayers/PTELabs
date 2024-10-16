import React from "react";
import { useSelector } from "react-redux";

const Re_Order_comp = ({ data, current }) => {
  const user_selected = useSelector((state) => state.fib.right_items);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h3 className="text-white">Correct Answers</h3>
        <p>
          {data[current].para.map((val) => {
            return <p style={{ border: "1px solid white" }}>{val} </p>;
          })}
        </p>
      </div>
      <div style={{ flex: 1 }}>
        {user_selected.map((val) => {
          return <p style={{ border: "1px solid white" }}>{val} </p>;
        })}
      </div>
    </div>
  );
};

export default Re_Order_comp;
