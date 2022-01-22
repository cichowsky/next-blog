import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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

export const getFileBySlug = async (path, slug) => {
  const directoryPath = join(process.cwd(), path);
  const filePath = join(directoryPath, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content: markdownContent } = matter(fileContents);

  let content = '';
  if (markdownContent) {
    content = await remark().use(html).process(markdownContent);
    content = content.toString();
  }

  return {
    ...data,
    content,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null,
  };
};
