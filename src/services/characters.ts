import prisma from "@/lib/prisma";
import { getQuotes } from "./quotes";

export async function getAllCharacters() {
  const chars = await prisma.character.findMany();
  return chars.map((char) => {
    return {
      ...char,
      skills: char.skills === "" ? [] : char.skills.split("%"),
      images: char.images === "" ? [] : char.images.split("%"),
      occupations: char.occupations === "" ? [] : char.occupations.split("%"),
    };
  });
}

export async function getOneCharacterWithQuotes(slug: string) {
  const char = await prisma.character.findUnique({
    where: {
      slug,
    },
  });

  if (char) {
    const quotes = await getQuotes(char.id);
    return {
      ...char,
      skills: char.skills === "" ? [] : char.skills.split("%"),
      images: char.images === "" ? [] : char.images.split("%"),
      occupations: char.occupations === "" ? [] : char.occupations.split("%"),
      quotes,
    };
  }

  return char;
}
