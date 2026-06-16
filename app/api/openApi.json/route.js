import { NextResponse } from "next/server";
import { getApiDocs } from "@/lib/swagger"; // Ajuste le chemin si nécessaire

export async function GET() {
  const spec = await getApiDocs();
  return NextResponse.json(spec);
}
