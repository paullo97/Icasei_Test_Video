import 'express-session';

declare module 'express-session' {
  interface SessionData {
    favorites: string[];
  }
}

export interface SessionModel {
  secret: string,
  resave: boolean,
  saveUninitialized: boolean,
  cookie: CookieModel
}

interface CookieModel {
  secure: boolean;
}