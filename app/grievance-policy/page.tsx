import React from "react";
import Heading from "@/components/grievancePolicy/Heading";
import Description from "@/components/grievancePolicy/Description";
import Queries from "@/components/grievancePolicy/Queries";

export const metadata = {
  title: "Grievance | PolicyMHB Academy ",
};

export default function page() {
  return (
    <div className="">
      <Heading />
      <Description />
      <Queries />
    </div>
  );
}
