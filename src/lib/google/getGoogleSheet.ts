import { google } from "googleapis";
import { auth } from ".";
import { IBlog, ICategory, ITag } from "@/types/blog";

// types
type TSheetData = string[][];

const sheets = google.sheets({ version: "v4", auth });

const getSheetData = async (range: string) => {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "1GEKSzbj1ulrCfMj4Q0XpHzGA49nz5aqcIWOqnMXIorA",
    range,
  });

  return res.data.values;
};

const formatter = (sheetData: TSheetData) => {
  const [indexs, ...data] = sheetData;
  const formatData = data.map((row) => {
    interface MyObject {
      [key: string]: any;
    }
    const obj: MyObject = {};

    row.forEach((item, index) => {
      const currentKey = indexs[index];
      obj[currentKey] = item;
    });

    return obj;
  });

  return formatData;
};

export const getBlogs = async (category?: string) => {
  const range = "blog!A1:H";
  const sheetData = (await getSheetData(range)) as TSheetData;
  const data = formatter(sheetData) as IBlog[];

  if (!category) return data;

  return data.filter((item) => item.categories === category) || [];
};

export const getPages = async (category?: string, currentPage?: number) => {
  const data = await getBlogs(category);
  const limit = 5;
  const totalData = data.length;
  const totalPages = Math.ceil(totalData / limit);

  const startIndex = ((currentPage || 1) - 1) * limit;
  const endIndex = Math.min(startIndex + limit - 1, totalPages - 1);

  return { totalData, totalPages, startIndex, endIndex };
};

export const getCategories = async () => {
  const range = "categories!A1:C";
  const sheetData = (await getSheetData(range)) as TSheetData;
  const format = formatter(sheetData) as ICategory[];
  return format;
};

export const getTags = async () => {
  const range = "tags!A1:C";
  const sheetData = (await getSheetData(range)) as TSheetData;
  const format = formatter(sheetData) as ITag[];
  return format;
};

export const getBlog = async (slug: string) => {
  const allData = await getBlogs();
  return allData.find((item) => item.slug === slug) as IBlog;
};
