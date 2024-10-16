import React, { useState } from 'react'
import QuestionComponent from '../../components/QuestionComponent'
import { describe_images } from '../../data/speaking/describeImages'

const DescribeImage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [value, setValue] = useState("");
    const handleNext = (index) => {
        if (index < describe_images.length) {
            setCurrentQuestionIndex(index);
        }
    };
    const handleStop = () => {
        console.log("Stop clicked");
    };
    return (
        <div>
            <QuestionComponent
                heading="Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the image is showing. You will have 40 seconds to give your response."
                questions={describe_images}
                currentQuestionIndex={currentQuestionIndex}
                type="img"
                onNext={handleNext}
                onStop={handleStop}
                setValue={setValue}
            />
        </div>
    )
}

export default DescribeImage