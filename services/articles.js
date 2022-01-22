import { getList, getFileBySlug } from 'lib/mdParser';

export const getListOfArticles = () => {
  const articles = getList('_data/articles');

  return articles.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
};

export const getArticleBySlug = async (slug) => {
  const article = await getFileBySlug('_data/articles', slug);

  return article;
};
