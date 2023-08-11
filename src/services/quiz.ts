import prisma from "@/lib/prisma";

export async function getQuiz(id: string) {
  const quiz = await prisma.quiz.findUnique({
    where: { id },
  });

  return quiz;
}

export async function getRandomQuiz() {
  const quizList = await prisma.quiz.findMany();
  const count = quizList.length;

  if (count > 0) {
    const random = Math.floor(Math.random() * count);
    return quizList[random];
  }

  return null;
}
