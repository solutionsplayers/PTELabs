import React, { useState } from "react";

const Test = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US"; // Set language
    recognition.interimResults = false;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const speechToText = event.results[event.resultIndex][0].transcript;
      setTranscript(speechToText);
    };

    recognition.start();
    setIsListening(true);

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  const stopListening = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.stop();
    setIsListening(false);
  };

  return (
    <div>
      <h1>Speech to Text</h1>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default Test;
