import { getRandomQuiz } from "@/services/quiz";
import { NextResponse } from "next/server";

// Get a random question
export async function GET() {
  const quiz = await getRandomQuiz();
  if (quiz) {
    return NextResponse.json({
      quiz,
    });
  }

  const res = new NextResponse("No quiz found.", { status: 404 });
  return res;
}
