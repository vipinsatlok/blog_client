import { google } from "googleapis";

export const auth = new google.auth.GoogleAuth({
  keyFile: "secret.json",
  scopes: [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/spreadsheets.readonly",
  ],
});
