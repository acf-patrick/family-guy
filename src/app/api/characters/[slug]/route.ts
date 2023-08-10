import { NextRequest, NextResponse } from "next/server";
import { getOneCharacterWithQuotes } from "@/services/characters";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      slug: string;
    };
  }
) {
  const char = await getOneCharacterWithQuotes(params.slug);
  if (char) {
    return NextResponse.json(char);
  }

  return new NextResponse("Character not found", {
    status: 404,
  });
}
