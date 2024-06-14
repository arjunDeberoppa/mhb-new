import React from "react";

interface ManagementTeamHeadingProps {
  title: string;
  subTitle: string;
  spanSubTitle: string;
  description: string;
}

const ManagementHeading: React.FC<ManagementTeamHeadingProps> = ({
  title,
  subTitle,
  spanSubTitle,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        {title} <span className="text-custom-green">{subTitle}</span>
        {spanSubTitle}
      </h2>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
};

export default ManagementHeading;
