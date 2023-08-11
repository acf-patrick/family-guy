import { getQuiz } from "@/services/quiz";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const quiz = await getQuiz(params.id);
  if (quiz) {
    const { correct_answer } = quiz;
    return NextResponse.json({
      answer: correct_answer,
    });
  }

  const res = new NextResponse("Quiz not found", { status: 404 });
  return res;
}
