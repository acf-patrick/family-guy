import {
  getAllCharacters,
  getOneCharacterWithQuotes,
} from "@/services/characters";
import StyledContainer from "./Container.styled";
import { redirect } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const chars = await getAllCharacters();
  return chars.map((char) => ({ slug: char.slug }));
}

export default async function CharacterPage({
  params,
}: {
  params: { slug: string };
}) {
  const datas = await getOneCharacterWithQuotes(params.slug);

  if (!datas) {
    redirect("/404");
  }

  const { quotes, ...character } = datas;

  return (
    <StyledContainer>
      <div className="head">
        <h1>{character.name}</h1>
        <ul>
          {character.occupations.map((occupation, i) => (
            <li key={i}>{occupation}</li>
          ))}
        </ul>
      </div>
      <p className="description">{character.description}</p>
      <ul className="images">
        {character.images.map((image, i) => (
          <li key={i}>
            <img src={image} alt="" />
          </li>
        ))}
      </ul>
      {character.skills.length > 0 && (
        <>
          <h2>Power and Skills</h2>
          <ul className="skills">
            {character.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </>
      )}
      {quotes.length > 0 && (
        <>
          <h2>Famous Quotes</h2>
          <ul className="quotes">
            {quotes.map((quote, i) => (
              <li key={i}>{quote}</li>
            ))}
          </ul>
        </>
      )}
    </StyledContainer>
  );
}
