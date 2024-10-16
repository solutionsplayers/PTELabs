import React, { useState, useEffect, useRef } from "react";

const Sumerize_Comp = ({ questions, currentQuestionIndex, setValue }) => {
  const [status, setStatus] = useState(3);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    setUserInteracted(true);
    setStatus(3);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
      setProgress(0);
    }

    if (userInteracted) {
      setStatus(3);
    }
  }, [currentQuestionIndex, userInteracted]);

  useEffect(() => {
    if (status > 0 && userInteracted) {
      const countdown = setInterval(() => {
        setStatus((prevStatus) => (prevStatus > 1 ? prevStatus - 1 : 0));
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [status, userInteracted]);

  useEffect(() => {
    if (status === 0 && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  }, [status]);

  useEffect(() => {
    const updateProgress = () => {
      const { currentTime, duration } = audioRef.current;
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  const handleAudioEnd = () => {
    setStatus("Completed");
    setProgress(100);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!userInteracted ? (
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start
        </button>
      ) : (
        <>
          <div className="p-10" style={{ border: "1px solid grey" }}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Current Status:</h3>
              <p>
                {status > 0 ? `Playing in ${status} seconds` : "Playing..."}
              </p>
            </div>

            <div className="mb-4 w-64">
              <label className="block text-sm font-medium mb-1">Volume:</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full"
              />
            </div>
            <div className="w-64 h-4 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <audio ref={audioRef} onEnded={handleAudioEnd}>
            <source
              src={questions[currentQuestionIndex]?.src}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
      <textarea
        onChange={(e) => setValue(e.target.value)}
        rows={6}
        placeholder="Type your message"
        className="w-full mt-10 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      ></textarea>
    </div>
  );
};

export default Sumerize_Comp;
