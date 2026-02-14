import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { signAccessToken } from '@/lib/auth/jwt';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Replace with DB lookup in production.
  const fakeHash = await bcrypt.hash('admin123', 10);
  const valid = email === 'admin@cricpulse.com' && (await bcrypt.compare(password, fakeHash));

  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = await signAccessToken({ sub: 'user_1', role: 'SUPER_ADMIN', tenantId: 'tenant_default' });
  return NextResponse.json({ accessToken: token });
}
