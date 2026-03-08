import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    step: 1,
    message: "Inspect the headers of this response.",
    tip: "Some developers encode messages using base64."
  });

  response.headers.set("x-clue", "Y29kZSByZXZpZXc="); // code review
  response.headers.set("x-next-endpoint", "/api/second");

  return response;
}