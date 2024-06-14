import { google } from "googleapis";

const formatDateAndTime = (date: Date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  //@ts-ignore
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export async function POST(req: Request) {
  try {
    const { sheetID, data, sheetName } = await req.json(); // Add sheetName to accept the sheet name dynamically

    const submission = formatDateAndTime(new Date());

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        //@ts-ignore
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetID,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[...Object.keys(data).map((key) => data[key]), submission]],
      },
    });

    return Response.json({ status: "success" });
  } catch (err) {
    console.log(err, "err");
    //@ts-ignore
    Response.json({ status: "error", message: err.message });
  }
}
