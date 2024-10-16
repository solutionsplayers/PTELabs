import React, { useState, useRef, useEffect } from "react";
import ResultComponent from "./ResultComp/ResultComponent";

const VoiceRecorder = ({ ques }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [comparisonResult, setComparisonResult] = useState([]);
  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTranscript("");
    setAudioURL(null);
    setOpen(false);
    setComparisonResult([]);
  }, [ques]);

  const startRecording = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = true;
    let completeTranscript = "";

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const speechToText = event.results[i][0].transcript;
        completeTranscript += speechToText + " ";
      }
      setTranscript(completeTranscript);
      compareText(completeTranscript.trim().split(" "), ques.split(" "));
    };

    recognition.start();
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaStreamRef.current = stream;
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((error) => console.error("Error accessing media devices.", error));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.stop();
    setOpen(true);
  };

  const handleDataAvailable = (event) => {
    const audioBlob = new Blob([event.data], { type: "audio/wav" });
    const audioURL = URL.createObjectURL(audioBlob);
    setAudioURL(audioURL);
  };

  const compareText = (transcriptWords, quesWords) => {
    let result = [];
    let maxLength = Math.max(transcriptWords.length, quesWords.length);

    for (let i = 0; i < maxLength; i++) {
      if (!transcriptWords[i]) {
        // Word is missing
        result.push({ word: quesWords[i], status: "missing" });
      } else if (transcriptWords[i] === quesWords[i]) {
        // Word matches
        result.push({ word: transcriptWords[i], status: "correct" });
      } else {
        // Word does not match
        result.push({ word: transcriptWords[i], status: "incorrect" });
      }
    }

    setComparisonResult(result);
    console.log(
      "Missing words:",
      result.filter((res) => res.status === "missing")
    );
  };

  const renderComparison = () => {
    return comparisonResult.map((res, index) => {
      if (res.status === "correct") {
        return (
          <span key={index} style={{ color: "green" }}>
            {res.word}{" "}
          </span>
        );
      } else if (res.status === "incorrect") {
        return (
          <span key={index} style={{ color: "red" }}>
            {res.word}{" "}
          </span>
        );
      } else if (res.status === "missing") {
        return (
          <span
            key={index}
            style={{ textDecoration: "line-through", color: "gray" }}
          >
            {res.word}{" "}
          </span>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
        <button
          onClick={startRecording}
          disabled={isRecording}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          disabled={!isRecording}
          className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50"
        >
          Stop Recording
        </button>
      </div>

      {open && (
        <ResultComponent
          open={open}
          close={() => setOpen(false)}
          audio={audioURL}
          transcript={transcript}
          ques={ques}
          comparison={renderComparison()}
        />
      )}
      {isRecording && <span className="text-red-500">Recording...</span>}
    </div>
  );
};

export default VoiceRecorder;
