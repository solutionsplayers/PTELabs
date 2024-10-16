import React from "react";

const AnswerComponent = ({ renderComp }) => {
    return (
        <div className="h-[40vh] bg-answerbg overflow-y-auto">
            {renderComp}
        </div>
    );
};

export default AnswerComponent;
