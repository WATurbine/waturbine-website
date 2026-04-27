import { NextResponse } from 'next/server';

const sponsorshipAliases = new Set([
  '/WATurbine_Sponsorship.pdf',
  '/waturbine_sponsorship.pdf',
  '/Sponsorship_Package.pdf',
]);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (sponsorshipAliases.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/Waturbine_Sponsorship.pdf';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/WATurbine_Sponsorship.pdf', '/waturbine_sponsorship.pdf', '/Sponsorship_Package.pdf'],
};
