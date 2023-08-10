import prisma from "@/lib/prisma";

export async function getQuotes(characterId: string) {
  const quotes = await prisma.quote.findMany({
    where: {
      characterId,
    },
  });

  return quotes.map(({ quote }) => quote);
}
