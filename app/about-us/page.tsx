import React from "react";
import ContentCertification from "@/components/homePage/CertificationContent";
import ChangingLife from "@/components/about/ChangingLife";
import Vision from "@/components/about/Vision";
import FacultyTeam from "@/components/about/FacultyTeam";
import ManagementTeam from "@/components/about/ManagementTeam";
import Opportunities from "@/components/about/Opportunities";

export const metadata = {
  title: "Our Story | MHB | Online Fitness",
};

export default function About() {
  return (
    <div>
      <ChangingLife />
      <Vision />
      <ContentCertification />
      <FacultyTeam />
      <ManagementTeam />
      <Opportunities />
    </div>
  );
}
