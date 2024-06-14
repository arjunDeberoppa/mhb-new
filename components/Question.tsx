import React from "react";

interface QASectionProps {
  question: string;
  text: string;
}

const QASection: React.FC<QASectionProps> = ({ question, text }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">{question}</p>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default QASection;
