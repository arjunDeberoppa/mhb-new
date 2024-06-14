"use client";
import React from "react";

interface MCQProps {
  question: string;
  options: string[];
  activeIndex: number;
  onOptionSelect: (index: number) => void;
}

const MCQForm: React.FC<MCQProps> = ({
  question,
  options,
  activeIndex,
  onOptionSelect,
}) => {
  return (
    <div className="flex flex-col gap-12 py-28 px-[56px] bg-custom-light max-w-[713px] h-[577px]">
      <div className="flex gap-5">
        {options.map((_, index) => (
          <div
            key={index}
            className={`w-[104.2px] h-[10px] ${
              index === activeIndex
                ? "bg-custom-purple"
                : "bg-[#3C3D41] bg-opacity-30"
            }`}
            onClick={() => onOptionSelect(index)}
          ></div>
        ))}
      </div>
      <h2 className="font-bold text-[32px]">{question}</h2>
      <div className="flex flex-col gap-[14px]">
        {options.map((option, index) => (
          <label key={index} className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="gender"
              value={option}
              checked={index === activeIndex}
              onChange={() => {}}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MCQForm;
