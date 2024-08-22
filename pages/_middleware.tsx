import { NextResponse } from 'next/server';

export function middleware() {
  const hasAccount:Boolean = checkUserAccount(req); // You need to implement this function based on your authentication logic

  if (hasAccount) {
    return NextResponse.redirect('/home');
  } else {
    return NextResponse.redirect('/index'); // Or wherever you want to redirect users without an account
  }
}

function checkUserAccount(req) {
  // Implement your logic to check if the user has an account.
  // This might involve checking cookies, session, or making an API call.
}
