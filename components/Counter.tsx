import React from "react";

interface CounterProps {
  count: string;
  description: string;
}

const Counter: React.FC<CounterProps> = ({ count, description }) => {
  return (
    <div className="pl-8 border-l-2 border-white max-w-[288px] lg:w-96">
      <p className="text-4xl lg:text-[50px] font-bold leading-[50px] lg:leading-[100px] xl:text-[70px]">
        {count}
      </p>
      <p className="text-sm lg:text-lg">{description}</p>
    </div>
  );
};

export default Counter;
