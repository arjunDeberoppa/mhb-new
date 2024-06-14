import React from "react";

interface AchievementProps {
  title: string;
  subtitle: string;
  subtitle_1: string;
  description: string;
  subtitleSize: string;
  w_content: string;
  subtitleColor: string;
}

const ContentSection: React.FC<AchievementProps> = ({
  title,
  subtitle,
  subtitle_1,
  description,
  w_content,
  subtitleSize,
  subtitleColor = "text-custom-black",
}) => {
  return (
    <div className={`flex flex-col gap-3 ${w_content}`}>
      <h4>{title}</h4>
      <div className="flex flex-col gap-4">
        <h2
          className={`text-4xl font-bold ${subtitleSize} md:leading-custom-line-height`}
        >
          {subtitle}
          <span className="lg:inline-block">
            <span className={subtitleColor}>{subtitle_1}</span>
          </span>
        </h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ContentSection;
