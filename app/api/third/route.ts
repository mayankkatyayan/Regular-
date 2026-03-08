import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");

  if (!key) {
    return NextResponse.json({
      step: 3,
      message: "You need to provide the key as a query parameter.",
      example: "/api/third?key=value",
      hint: "Use the decoded word from the previous step."
    });
  }

  if (key === "developer") {
    return NextResponse.json({
      success: true,
      words: [
        "code review",
        "hash",
        "secrets"
      ],
      Achieved: "Great job You've found the three key words. Now, can you can DM me the final answers."
    //   instruction: "Join them using hyphen (-)"
    });
  }

  return NextResponse.json({
    error: "Incorrect key"
  });
}