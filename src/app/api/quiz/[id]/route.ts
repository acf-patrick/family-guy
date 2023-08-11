import { NextRequest, NextResponse } from "next/server";
import { getQuiz } from "@/services/quiz";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const quiz = await getQuiz(params.id);
  if (quiz) {
    const { correct_answer, ...question } = quiz;
    return NextResponse.json({
      question,
    });
  }

  const res = new NextResponse("Quiz not found", {
    status: 404,
  });

  return res;
}
