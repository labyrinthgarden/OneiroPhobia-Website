import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, code, newPassword } = await req.json();
  if (!email || !code || !newPassword) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.resetCode || !user.resetCodeExpires) {
    return NextResponse.json({ error: 'Invalid code or email.' }, { status: 400 });
  }

  if (user.resetCode !== code) {
    return NextResponse.json({ error: 'Invalid code.' }, { status: 400 });
  }

  if (user.resetCodeExpires < new Date()) {
    return NextResponse.json({ error: 'Code expired.' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: {
      password: hashedPassword,
      resetCode: null,
      resetCodeExpires: null,
    },
  });

  return NextResponse.json({ success: true });
}
