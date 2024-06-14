import React from "react";
import Heading from "@/components/dataProtection/Heading";
import Description from "@/components/dataProtection/Description";
import Queries from "@/components/grievancePolicy/Queries";

export const metadata = {
  title: "Data Protection Policy | MHB Academy",
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
