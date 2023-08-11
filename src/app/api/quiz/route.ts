import { getRandomQuiz } from "@/services/quiz";
import { NextRequest, NextResponse } from "next/server";

// Get a random question
export async function GET() {
  const quiz = await getRandomQuiz();
  if (quiz) {
    const { correct_answer, ...question } = quiz;
    return NextResponse.json({
      question,
    });
  }

  const res = new NextResponse("No quiz found.", { status: 404 });
  return res;
}

// Get a random question
export async function POST(req: NextRequest) {
  const body = await req.json();
  const quiz = await getRandomQuiz(body.id);
  if (quiz) {
    const { correct_answer, ...question } = quiz;
    return NextResponse.json({
      question,
    });
  }

  const res = new NextResponse("No quiz found.", { status: 404 });
  return res;
}
