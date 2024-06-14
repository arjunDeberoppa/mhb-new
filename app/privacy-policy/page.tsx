import PolicyDescription from "@/components/privacyPolicy/PolicyDescription";
import PolicyHeading from "@/components/privacyPolicy/PolicyHeading";
import PolicyQueries from "@/components/privacyPolicy/PolicyQueries";
import React from "react";

export const metadata = {
  title: "Privacy policy | MHB Academy",
};

export default function page() {
  return (
    <div className="">
      <PolicyHeading />
      <PolicyDescription />
      <PolicyQueries />
    </div>
  );
}
