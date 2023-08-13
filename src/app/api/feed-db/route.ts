import prisma from "@/lib/prisma";
import { characters, quiz, quotes } from "@/services/datas";
import { NextResponse } from "next/server";

export async function GET() {
  for (const quote of quotes) {
    const char_id = await prisma.character.findUnique({
      where: {
        name: characters.find((char) => char.id === quote.character_id)!.name,
      },
      select: {
        id: true,
      },
    });
    await prisma.quote.create({
      data: {
        quote: quote.qoute,
        character: {
          connect: {
            id: char_id!.id,
          },
        },
      },
    });
  }
  return NextResponse.json("ok");
}
