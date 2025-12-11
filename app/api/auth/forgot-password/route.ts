import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: "Email not found" },
        { status: 404 }
      );
    }

    // Generate reset token
    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 1000 * 60 * 10); // expires in 10 min

    await prisma.user.update({
      where: { email },
      data: {
        resetToken: token,
        resetTokenExpiry: expiry,
      },
    });

    console.log("Reset link (dev only):", `http://localhost:3000/reset-password/${token}`);

    return NextResponse.json({
      message: "If this email exists, a reset link was sent.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
