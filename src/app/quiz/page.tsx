import { TbArrowBigRightFilled } from "react-icons/tb";
import { getRandomQuiz } from "@/services/quiz";
import StyledContainer from "./Container.styled";
import Image from "next/image";
import Link from "next/link";

export default async function QuizLayoutPage() {
  const quiz = await getRandomQuiz();
  
  return (
    <StyledContainer>
      <div className="wallpaper">
        <div>
          <Image
            src="/wallpaper.jpg"
            alt="family-guy"
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className="body">
        <h1>Family Guy Quiz</h1>
        <p>
          take this quiz to find out how much you know about the hit animated
          sitcom <span>Family Guy</span>. Test your knowledge of the characters,
          the episodes, and the show&apos;s many pop culture references.
        </p>
        <Link href={quiz ? `/quiz/${quiz.id}` : ""} className="button">
          <TbArrowBigRightFilled />
          <span>Take a Quiz Now!</span>
        </Link>
      </div>
    </StyledContainer>
  );
}
