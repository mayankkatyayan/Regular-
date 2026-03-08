import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Developer API",
    available_endpoints: [
      "/api/first"
    ],
    hint: "Start here and inspect headers carefully."
  });
}