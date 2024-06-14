import { NextRequest, NextResponse } from "next/server";

const formatDateAndTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();
    console.log("Request data:", requestData);

    const { data } = requestData;

    if (!data) {
      return NextResponse.json(
        { status: "error", message: "Invalid data" },
        { status: 400 }
      );
    }

    const submission = formatDateAndTime(new Date());

    const leadSquaredData = [
      {
        Attribute: "mx_What_is_your_goal_for_doing_this_course",
        Value: data.intent,
      },
      {
        Attribute: "mx_How_much_are_you_willing_to_invest_in_a_course",
        Value: data.investment,
      },
      { Attribute: "mx_Is_this_your_first_course", Value: data.level },
      { Attribute: "LeadAge", Value: data.age },
      { Attribute: "FirstName", Value: data.firstName },
      { Attribute: "LastName", Value: data.lastName },
      { Attribute: "EmailAddress", Value: data.email },
      { Attribute: "Phone", Value: data.phoneNumber },
    ];

    if (data.utmSource) {
      leadSquaredData.push({ Attribute: "Source", Value: data.utmSource });
    }
    if (data.utmCampaign) {
      leadSquaredData.push({
        Attribute: "SourceCampaign",
        Value: data.utmCampaign,
      });
    }
    if (data.utmMedium) {
      leadSquaredData.push({
        Attribute: "SourceMedium",
        Value: data.utmMedium,
      });
    }

    console.log("LeadSquared data:", leadSquaredData);

    const response = await fetch(
      "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r249abc9ddba7c751418ed73e8c810385&secretKey=a00b45c5a4e5aba759151f345955e4e57a7205bb",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadSquaredData),
      }
    );

    const responseData = await response.json();
    console.log("Response data:", responseData);

    if (response.ok) {
      return NextResponse.json({ status: "success", data: responseData });
    } else {
      return NextResponse.json(
        { status: "error", message: responseData },
        { status: response.status }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error);
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { status: "error", message: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
