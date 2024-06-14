import Heading from "@/components/delegatePolicy/Heading";
import Description from "@/components/delegatePolicy/Description";
import Queries from "@/components/grievancePolicy/Queries";
import React from "react";

export const metadata = {
  title: "Delegate Policy | MHB Academy",
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
