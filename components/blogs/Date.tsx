// import { parseISO, format } from "date-fns";
// import React from "react";

// interface DateProps {
//   dateString: string;
// }

// const Date: React.FC<DateProps> = ({ dateString }) => {
//   const date = parseISO(dateString);
//   return <time dateTime={dateString}>{format(date, "LLLL  d, yyyy")}</time>;
// };

// export default Date;

import React from "react";
import { parseISO, format } from "date-fns";

interface DateProps {
  dateString?: string;
}

const DateComponent: React.FC<DateProps> = ({ dateString }) => {
  if (!dateString) {
    return null;
  }

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateComponent;
