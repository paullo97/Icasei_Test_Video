import { SessionModel } from "../models/session.model"

export const SECRETS = {
    PORT: 3333,
    SESSION_KEY: '#ICaseiAMelhor!'    
}

export const SESSION: SessionModel = {
    secret: SECRETS.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}