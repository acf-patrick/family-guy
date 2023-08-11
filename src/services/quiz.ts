import prisma from "@/lib/prisma";
import { Quiz } from "@prisma/client";

export async function getQuiz(id: string) {
  const quiz = await prisma.quiz.findUnique({
    where: { id },
  });

  return quiz;
}

/**
 * Get random quiz with different ID
 */
export async function getRandomQuiz(id?: string): Promise<Quiz | null> {
  const quizList = await prisma.quiz.findMany();
  const count = quizList.length;

  if (count > 0) {
    const random = Math.floor(Math.random() * count);
    const quiz = quizList[random];

    if (id && quiz.id === id) {
      return await getRandomQuiz(id);
    }

    return quiz;
  }

  return null;
}
