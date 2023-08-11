import { notFound } from "next/navigation";
import Answers from "./components/Answers";
import StyledContainer from "./components/Container.styled";
import { getQuiz } from "@/services/quiz";

export default async function QuizPage({ params }: { params: { id: string } }) {
  const quiz = await getQuiz(params.id);
  if (!quiz) {
    notFound();
  }

  return (
    <StyledContainer>
      <h1>{quiz.title}</h1>
      <Answers
        answers={quiz.answers.sort((a, b) => 0.5 - Math.random())}
        correct={quiz.correct_answer}
        quizId={quiz.id}
      />
    </StyledContainer>
  );
}
