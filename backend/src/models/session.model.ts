// src/models/session.model.ts

import 'express-session';

declare module 'express-session' {
  interface SessionData {
    views: number;
  }
}
