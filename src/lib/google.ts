import { drive_v3, google } from "googleapis";
import { JWT } from "google-auth-library";

const auth = new JWT({
  keyFile: "secret.json",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

export const drive = google.drive({ version: "v3", auth });

async function getDataFromGoogleDrive(folderId: string) {
  const files = await drive?.files?.list({
    q: `'${folderId}' in parents`,
    fields: "nextPageToken, files(id, name, mimeType)",
  });

  return files?.data?.files ? files?.data?.files : null;
}

export async function getAllMarkDownData() {
  const folderId = "1hviP85oBOy6fTwnclH4HoqZFF-PUGHfF";
  const data = (await getDataFromGoogleDrive(
    folderId
  )) as drive_v3.Schema$File[];

  const markdownFiles = [];

  for (const file of data) {
    const res = await drive.files.get({
      fileId: file.id as string,
      alt: "media",
    });
    markdownFiles.push({
      name: file.name,
      id: file.id,
      content: res.data.toString(),
    });
  }

  return markdownFiles;
}

export async function getSingleMarlDownDataWithId(fileId: string) {
  const folderId = "1hviP85oBOy6fTwnclH4HoqZFF-PUGHfF";
  const data = await getDataFromGoogleDrive(folderId);

  const markdownFiles = [];

  for (const file of data) {
    if (fileId && file.id !== fileId) return null;

    const res = await drive.files.get({
      fileId: file.id as string,
      alt: "media",
    });
    markdownFiles.push({
      name: file.name,
      id: file.id,
      content: res.data.toString(),
    });
  }
  return markdownFiles[0] ? markdownFiles[0] : null;
}
