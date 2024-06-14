import React from "react";
import FacultyCard from "../FacultyCard";
import ManagementHeading from "../ManagementHeading";
import { teamData } from "@/app/core/data";

export default function FacultyTeam() {
  // Exclude the last 4 members
  const displayedTeamData = teamData.slice(0, -4);

  return (
    <section>
      <div className="flex flex-col gap-20 py-16 container max-w-[1440px] mx-auto md:py-28">
        <ManagementHeading
          title="Meet"
          subTitle="Our Faculty"
          spanSubTitle=" Team"
          description="Experienced professionals dedicated to your success"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-y-16">
          {displayedTeamData.map((member, index) => (
            <div key={index} className="">
              <FacultyCard
                name={member.name}
                role={member.designation}
                description={member.text}
                imgSrc={member.imgSrc}
                linkedin={member.linkedin}
                instagram={member.instagram}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
