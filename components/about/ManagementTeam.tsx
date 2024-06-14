import React from "react";
import TeamMember from "../ManagementCard";
import { teamMembers } from "@/app/core/data";

export default function ManagementTeam() {
  const renderTeamMembers = () => {
    return teamMembers.map((member, index) => (
      <TeamMember
        key={index}
        name={member.name}
        role={member.role}
        description={member.description}
        imgSrc={member.imgSrc}
        instagram={member.instagram}
        linkedin={member.linkedin}
      />
    ));
  };

  return (
    <section className="bg-custom-light">
      <div className="container max-w-[1440px] mx-auto py-16 md:py-28">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Meet <span className="text-custom-green">Our Management </span>{" "}
              Team
            </h2>
            <p className="text-lg text-center">
              Get to know the experts behind MHB Academy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {renderTeamMembers()}
          </div>
        </div>
      </div>
    </section>
  );
}
