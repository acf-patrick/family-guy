import prisma from "@/lib/prisma";
import { getQuotes } from "./quotes";

export async function getAllCharacters() {
  const chars = await prisma.character.findMany();
  return chars;
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
      quotes,
    };
  }

  return char;
}
