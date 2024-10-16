import React from "react";
import { describe_images } from "../data/speaking/describeImages";

const DescribeImageCom = ({ currentQuestionIndex, questions }) => {
    return (
        <div className="image-container">
            <h2 className="text-center mb-4">Image Descriptions</h2>
            <div className="flex flex-wrap justify-center gap-4">

                <img
                    src={questions[currentQuestionIndex].src}
                    // alt={`Image ${image.id}`}
                    className="rounded-lg shadow-md"
                />

            </div>
        </div>
    );
};

export default DescribeImageCom;
