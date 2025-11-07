import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    const genericMsg = 'If this email exists, a recovery code has been sent.';
    if (!user) {
      return NextResponse.json({ message: genericMsg });
    }

    // Generar código y expiración
    const code = Math.floor(10000000 + Math.random() * 90000000).toString();
    const expires = new Date(Date.now() + 15 * 60 * 1000);

    // Guardar el código y expiración
    await prisma.user.update({
      where: { email },
      data: {
        resetCode: code,
        resetCodeExpires: expires,
      },
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Oneirophobia <no-reply@oneirophobia.com>',
      to: email,
      subject: 'Código de recuperación de contraseña',
      text: `Tu código de recuperación es: ${code}. Este código expira en 15 minutos.`,
      html: `<p>Tu código de recuperación es: <b>${code}</b>. Este código expira en 15 minutos.</p>`,
    });

    return NextResponse.json({ message: genericMsg });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
