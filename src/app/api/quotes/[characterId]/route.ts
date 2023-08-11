import { getQuotes } from "@/services/quotes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      characterId: string;
    };
  }
) {
  const quotes = await getQuotes(params.characterId);
  if (quotes.length > 0) {
    return NextResponse.json(quotes);
  }

  const res = new NextResponse("No quote found for that character", {
    status: 404,
  });
  return res;
}
