import { NextResponse } from "next/server";
import { getAllCharacters } from "@/services/characters";

export async function GET() {
  const characters = await getAllCharacters();
  return NextResponse.json({
    characters,
  });
}
