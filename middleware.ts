import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip redirection for static assets and API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.endsWith('.js') || pathname.endsWith('.css') || pathname.endsWith('.png') || pathname.endsWith('.jpg')) {
    return NextResponse.next();
  }

  const hasAccount = checkIfUserHasAccount(request); 

  if (!hasAccount && pathname !== '/') {
    url.pathname = '/'; // Redirect to home page if no account
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

function checkIfUserHasAccount(request) {
  
  return false; // This should return true or false based on the user's status
}
