import { google } from "googleapis";
import { auth } from ".";

const drive = google.drive({ version: "v3", auth });

export const getMarkDownFile = async (fileId: string) => {
  try {
    const { data } = await drive.files.get({ fileId, alt: "media" });
    return data;
  } catch (error: any) {
    return new Error(error);
  }
};