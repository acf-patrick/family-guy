import prisma from "@/lib/prisma";
import MainStyled from "./components/Main.styled";
import { Container } from "@/components";
import Link from "next/link";

async function getAllCharacters() {
  const chars = await prisma.character.findMany();
  return chars;
}

export default async function Home() {
  const characters = await getAllCharacters();

  return (
    <MainStyled>
      <Container className="container">
        {characters.map((character) => (
          <Link key={character.id} href={`/characters/${character.slug}`}>
            <img
              src={character.avatar}
              alt={character.slug}
            />
          </Link>
        ))}
      </Container>
    </MainStyled>
  );
}
