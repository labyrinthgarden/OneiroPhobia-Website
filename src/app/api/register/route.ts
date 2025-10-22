import { NextRequest, NextResponse } from 'next/server';
import { addUser, findUserByEmail } from '@/lib/users';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Name, email and password required' }, { status: 400 });
  }

  const existing = findUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = addUser(email, hashedPassword);

  return NextResponse.json({ success: true, user: { id: newUser.id, email: newUser.email } });
}
