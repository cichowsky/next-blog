import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const readFile = (directoryPath, fileName) => {
  const filePath = join(directoryPath, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents);

  return {
    ...data,
    slug: fileName.replace('.md', ''),
    createdAt: data.date ? Number(new Date(data.date)) : null,
  };
};

export const getList = (path) => {
  const directoryPath = join(process.cwd(), path);
  const filesList = fs.readdirSync(directoryPath);

  return filesList.map((fileName) => readFile(directoryPath, fileName));
};
