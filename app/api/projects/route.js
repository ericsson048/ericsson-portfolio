import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/projects
export async function POST(req) {
  try {
    const data = await req.json();
    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        img: data.img,
        live: data.live || "",
        github: data.github || ""
      }
    });
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT /api/projects/:id
export async function PUT(req) {
  try {
    const { id, ...data } = await req.json();
    const updated = await prisma.project.update({
      where: { id: Number(id) },
      data
    });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/projects/:id
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const deleted = await prisma.project.delete({
      where: { id: Number(id) }
    });
    return NextResponse.json(deleted);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
