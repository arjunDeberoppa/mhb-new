import React from "react";
import Heading from "@/components/termsAndConditions/Header";
import Description from "@/components/termsAndConditions/Description";
import Queries from "@/components/grievancePolicy/Queries";

export const metadata = {
  title: "Terms And Condition | MHB Academy",
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
