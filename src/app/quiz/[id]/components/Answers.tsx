"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { MdNearbyError } from "react-icons/md";
import { FiRepeat } from "react-icons/fi";
import Link from "next/link";
import { darken, lighten } from "polished";
import { useRouter } from "next/navigation";

type AnswersProps = {
  answers: string[];
  quizId: string;
  correct: string;
};

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: unset;
  margin-top: 2rem;
`;

const StyledItem = styled.li<{ $selected: boolean; $correct: boolean }>`
  flex: 1;

  button {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-radius: 5px;

    color: ${({ theme, $correct, $selected }) =>
      $selected && $correct ? theme.colors.secondary : theme.colors.primary};

    background: ${({ theme, $correct, $selected }) =>
      $selected && !$correct
        ? theme.colors.error
        : darken(0.1, theme.colors.quaternary)};

    border: 1px solid
      ${({ theme, $correct, $selected }) =>
        $selected
          ? $correct
            ? theme.colors.secondary
            : theme.colors.error
          : lighten(0.1, theme.colors.quaternary)};
  }
`;

const StyledRetryButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.tertiary};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const RetryButton = ({ quizId }: { quizId: string }) => {
  const [random, setRandom] = useState("");

  useEffect(() => {
    fetch("/api/quiz", {
      method: "POST",
      body: JSON.stringify({
        id: quizId,
      }),
    })
      .then((res) => res.json())
      .then(({ question }) => setRandom(question.id))
      .catch((err) => console.error(err));
  }, [quizId]);

  return (
    <StyledRetryButton>
      <Link href={`/quiz/${random}`}>
        <FiRepeat /> <span>Do it again</span>
      </Link>
    </StyledRetryButton>
  );
};

export default function Answers({
  answers,
  correct,
  quizId,
}: AnswersProps) {
  const [selected, setSelected] = useState(-1);
  const [revealCorrect, setRevealCorrect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // right answer
    if (selected >= 0 && !revealCorrect) {
      fetch(`/api/quiz`, {
        method: "POST",
        body: JSON.stringify({
          id: quizId,
        }),
      })
        .then((res) => res.json())
        .then(({ question }) => {
          router.push(`/quiz/${question.id}`);
        })
        .catch((err) => console.error(err));
    }
  }, [selected, revealCorrect]);

  const itemOnSelect = (index: number) => {
    if (answers[index] !== correct) {
      setRevealCorrect(true);
    }
    setSelected(index);
  };

  return (
    <>
      <StyledList>
        {answers.map((answer, i) => (
          <StyledItem
            key={i}
            $selected={i === selected || (revealCorrect && answer === correct)}
            $correct={answer === correct}
          >
            <button disabled={selected >= 0} onClick={() => itemOnSelect(i)}>
              <span>{answer}</span>
              {answer === correct && (revealCorrect || i === selected) ? (
                <FaCheck />
              ) : i === selected ? (
                <MdNearbyError />
              ) : (
                <></>
              )}
            </button>
          </StyledItem>
        ))}
      </StyledList>
      {selected >= 0 && revealCorrect ? <RetryButton quizId={quizId} /> : <></>}
    </>
  );
}
