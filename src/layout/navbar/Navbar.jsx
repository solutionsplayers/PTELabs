import React, { useState } from "react";
import { LOGO } from "../../assets/images";
import DropDown from "../../components/DropDown";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const speakingOptions = [
    { label: "Read Aloud", to: "/read-aloud" },
    { label: "Repeat Sentence", to: "" },
    { label: "Describe Image", to: "/describe-image" },
    { label: "Retell Lecture", to: "" },
    { label: "Answer Short Question", to: "" },
  ];

  const writingOptions = [
    { label: "Summarize Written Text", to: "/summerize-written-text" },
    { label: "Essay", to: "/essay" },
  ];

  const readingOptions = [
    {
      label: "Reading and Writing Fill in the Blanks",
      to: "/fill-in-blanks-rw",
    },
    { label: "Multiple Choice Multiple Answer", to: "/mcq-multi-select-2" },
    { label: "Fill in the Blanks (Drag & Drop)", to: "/fill-in-blanks-dnd" },
    { label: "Re-order Paragraph", to: "/reading/re-order-paragraph" },
    { label: "Multiple Choice Single Answer", to: "/mcq-single-select-2" },
  ];

  const listeningOptions = [
    { label: "Summarize Spoken Text", to: "/summerize-spoken-text" },
    { label: "Fill in the Blanks", to: "/listening/fill-in-blank" },
    { label: "Multiple Choice, Multiple Answer", to: "/mcq-multi-select" },
    { label: "Highlight Correct Summary", to: "/highlight-correct-summary" },
    { label: "Multiple Choice Single Answer", to: "/mcq-single-select" },
    { label: "Select Missing Word", to: "/select-missing-word" },
    { label: "Highlight Incorrect Word", to: "/highlight-incorrect-words" },
    { label: "Write From Dictation", to: "" },
  ];

  const intensiveTrainingOptions = [
    { label: "Option 1", to: "/intensive1" },
    { label: "Option 2", to: "/intensive2" },
  ];

  return (
    <>
      <div className="flex items-center justify-between bg-[#f4f6f8] px-4 md:px-10 py-3 border-b border-secondary">
        <div className="flex-shrink-0">
          <img
            loading="lazy"
            src={LOGO}
            alt="PTE Labs Logo"
            style={{ height: "40px", width: "auto" }}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <DropDown buttonLabel={"SPEAKING"} options={speakingOptions} />
          <DropDown buttonLabel={"WRITING"} options={writingOptions} />
          <DropDown buttonLabel={"READING"} options={readingOptions} />
          <DropDown buttonLabel={"LISTENING"} options={listeningOptions} />
          {/* Uncomment the following line if you need the INTENSIVE TRAINING dropdown */}
          {/* <DropDown buttonLabel={"INTENSIVE TRAINING"} options={intensiveTrainingOptions} /> */}
        </div>
        <div className="hidden md:flex items-center gap-5">
          <CustomButton
            onClick={() => alert("Free Introduction Session clicked")}
            className="bg-transparent text-red-500 border border-red-500"
          >
            Free Introduction Session
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/logout")}
            className="bg-transparent text-red-500 border border-red-500"
          >
            Logout
          </CustomButton>
          <div className="flex items-center">
            <img
              src="/av1.png"
              alt="User Avatar"
              className="rounded-full h-8 w-8"
              loading="lazy"
            />
          </div>
        </div>
        {/* Mobile menu button */}
        {!isMenuOpen && (
          <button
            className="md:hidden flex items-center text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
        {isMenuOpen && (
          <button
            className="md:hidden flex items-center text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoClose size={30} />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f4f6f8] border-b border-secondary px-4 py-2 space-y-2 space-x-2">
          <DropDown buttonLabel={"SPEAKING"} options={speakingOptions} />
          <DropDown buttonLabel={"WRITING"} options={writingOptions} />
          <DropDown buttonLabel={"READING"} options={readingOptions} />
          <DropDown buttonLabel={"LISTENING"} options={listeningOptions} />
          {/* Uncomment the following line if you need the INTENSIVE TRAINING dropdown */}
          {/* <DropDown buttonLabel={"INTENSIVE TRAINING"} options={intensiveTrainingOptions} /> */}
          <CustomButton
            onClick={() => alert("Free Introduction Session clicked")}
            className="bg-transparent text-red-500 border border-red-500 w-full"
          >
            Free Introduction Session
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/logout")}
            className="bg-transparent text-red-500 border border-red-500 w-full"
          >
            Logout
          </CustomButton>
        </div>
      )}
    </>
  );
};

export default Navbar;
