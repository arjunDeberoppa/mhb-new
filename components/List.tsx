import React from "react";
import Image from "next/image";

interface ListProps {
  value: string;
}

const List: React.FC<ListProps> = ({ value }) => {
  return (
    <div className="flex gap-4">
      <Image
        width={24}
        height={24}
        className="w-6 h-6"
        src="/assets/check.svg"
        alt="check"
      />
      <p>{value}</p>
    </div>
  );
};

export default List;
