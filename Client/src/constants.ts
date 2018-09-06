export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/savemymoney/api';

export const URL = {
    LOGIN: URL_BASE + "/login",
    REGISTRAZIONE: URL_BASE +"/registrazione",
    MOVIMENTI: URL_BASE + "/movimenti",
    UPDATE_PROFILO: URL_BASE + "/utente/updateprofilo",
    CATEGORIA:URL_BASE+"/categorie",
    FAMIGLIA:URL_BASE+"/famiglia",
    CATFAM:URL_BASE+"/famCat"
}

export const X_AUTH = "X-Auth";

export const AUTH_TOKEN = "auth-token";

export const UTENTE_STORAGE = "utente";

export const LINGUA = 'lingua';

export const VALUTA = 'valuta';