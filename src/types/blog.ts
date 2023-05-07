export interface IBlog {
  slug: string;
  title: string;
  discription: string;
  mdFileId: string;
  image: string;
  timestamp: Date;
  tag: string[];
  category: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ITag {
  id: string;
  name: string;
}
