import React from "react";
import Heading from "@/components/diversityPolicy/Heading";
import Description from "@/components/diversityPolicy/Description";
import Queries from "@/components/grievancePolicy/Queries";

export const metadata = {
  title: "Diversity Policy | MHB Academy",
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
