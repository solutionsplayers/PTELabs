import React, { useState, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceRecorder = () => {
  const [audioUrl, setAudioUrl] = useState(null); // To store the audio URL
  const mediaRecorderRef = useRef(null); // To store the MediaRecorder instance
  const audioChunks = useRef([]); // To store recorded audio chunks

  const {
    transcript, // Stores the converted speech to text
    resetTranscript, // Resets the transcript
    listening, // Boolean to track if microphone is active
  } = useSpeechRecognition();

  // Start recording audio and convert speech to text
  const startRecording = () => {
    resetTranscript(); // Reset the transcript before new recording starts

    // Start Speech Recognition
    SpeechRecognition.startListening({ continuous: true });

    // Request user microphone access and start audio recording using Promises
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        mediaRecorderRef.current.start();
      })
      .catch((error) => {
        console.error("Error accessing the microphone: ", error);
      });
  };

  // Stop recording audio and speech-to-text
  const stopRecording = () => {
    // Stop Speech Recognition
    SpeechRecognition.stopListening();

    // Stop the MediaRecorder and store the audio
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob); // Create audio URL to play back
        setAudioUrl(audioUrl); // Store the audio URL for playback
        audioChunks.current = []; // Reset the audio chunks for the next recording
      };
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Voice Recorder and Speech-to-Text</h2>

      <div>
        <button onClick={startRecording} disabled={listening}>
          Start Recording
        </button>
        <button onClick={stopRecording} disabled={!listening}>
          Stop Recording
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Transcribed Text:</h3>
        <p>{transcript || "Your speech will appear here..."}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        {audioUrl && (
          <>
            <h3>Recorded Audio:</h3>
            <audio controls src={audioUrl} />
          </>
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
