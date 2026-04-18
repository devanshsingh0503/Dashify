import { NextResponse } from 'next/server';

export function proxy(request) {
  const isAuth = true; // replace with real auth later

  if (!isAuth && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}