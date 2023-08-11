import { getAllCharacters } from "@/services/characters";
import StyledContainer from "./Container.styled";
import { Container } from "@/components";
import Link from "next/link";

export default async function Home() {
  const characters = await getAllCharacters();

  return (
    <StyledContainer>
      <Container className="container">
        {characters.map((character) => (
          <Link key={character.id} href={`/characters/${character.slug}`}>
            <img src={character.avatar} alt={character.slug} />
          </Link>
        ))}
      </Container>
    </StyledContainer>
  );
}
