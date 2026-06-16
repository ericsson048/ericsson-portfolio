import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/contacts
/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(contacts);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/contacts
export async function POST(req) {
  try {
    const data = await req.json();
    const contact = await prisma.contact.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        message: data.message
      }
    });
    return NextResponse.json(contact);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/contacts?id=UUID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const deleted = await prisma.contact.delete({
      where: { id }
    });
    return NextResponse.json(deleted);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
