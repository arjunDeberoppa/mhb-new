import React from "react";

export default function Description() {
  return (
    <section>
      <div className="container max-w-[1440px] mx-auto py-10 md:py-20">
        <h2 className="text-[32px] font-bold">
          Policy on Handling Disruptive Behaviour
        </h2>
        <h3 className="text-[20px] font-bold pt-10">Definition:</h3>
        <p className="font-medium">
          Within this document, reference to an &quot;individual&quot; is meant
          to cover both an individual and a group of individuals. Disruptive
          behavior can include:
        </p>
        <ul className="list-disc pl-5">
          <li>Disinterest (e.g., being forced into training)</li>
          <li>
            Interrupting (constantly sharing knowledge or asking questions
            hindering progress)
          </li>
          <li>Being under the influence of alcohol or drugs</li>
          <li>Argumentative</li>
          <li>Aggressive towards trainers or other people</li>
        </ul>
        <h3 className="text-[20px] font-bold pt-10">Risks:</h3>
        <p className="font-medium">
          Failure to address disruptive behavior can hinder the learning
          experience of the entire group and lead to dissatisfaction with the
          course.
        </p>
        <h3 className="text-[20px] font-bold pt-10">Staff Guidance:</h3>
        <p className="font-medium">
          Trainers must handle disruptive behavior professionally, considering
          individual learning styles and personal circumstances. They should
          utilize facilitation and teaching skills to manage courses
          effectively, including techniques such as:
        </p>
        <ul className="list-disc pl-5">
          <li>Establishing ground rules at the start of every course</li>
          <li>Having learners sign the ground rules</li>
          <li>Reminding learners about the ground rules</li>
          <li>Asking engaging questions</li>
          <li>
            Providing extra time or 1-to-1 time with certain individuals or
            groups
          </li>
        </ul>
        <h3 className="text-[20px] font-bold pt-10">Purposeful Disruption:</h3>
        <p className="font-medium">
          If a trainer determines that an individual is purposefully disruptive
          after professional judgment and applying their training, they must
          take appropriate action. Below is a guide for determining actions:
        </p>
        <ol className="list-decimal pl-5">
          <li>
            1-to-1 discussion: Speak privately with the learner at the next
            available opportunity to understand their circumstances and reach a
            common solution.
          </li>
          <li>
            Removal from the course: If a learner is hindering the teaching of
            the course or negatively impacting other delegates&apos; learning,
            they may need to be removed from the course. This can be done
            discreetly during a break.
          </li>
          <li>
            Immediate removal: If a learner poses a threat, is physically
            aggressive, or jeopardizes the safety of others, they should be
            immediately removed from the course for the safety of all.
          </li>
        </ol>
        <p className="font-medium">
          Trainers should complete a report describing the incident, actions
          taken, and reasons for decisions by the end of the day.
        </p>
      </div>
    </section>
  );
}
