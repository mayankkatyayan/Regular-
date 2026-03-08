import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    {
      step: 2,
      message: "Nice work decoding the first clue.",
      hint: "Decode the header again. You will need this value soon."
    },
    { status: 418 }
  );

  response.headers.set("x-key", "ZGV2ZWxvcGVy"); // developer
  response.headers.set("x-next-endpoint", "/api/third");

  return response;
}