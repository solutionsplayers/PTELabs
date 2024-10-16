import React, { useEffect, useState } from "react";

const CustomTimer = ({ onTimeUp, currentQuestionIndex, startTime = 600 }) => {
    const [timeLeft, setTimeLeft] = useState(startTime);

    useEffect(() => {
        setTimeLeft(startTime);
    }, [currentQuestionIndex, startTime]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(timer);
                    onTimeUp();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeUp, currentQuestionIndex]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return (
        <div className="text-black text-md border-2 border-black p-1 rounded-md">
            00:{formatTime(timeLeft)}
        </div>
    );
};

export default CustomTimer;
