import { getListOfArticles, getArticleBySlug } from 'services/articles';

import Template from 'components/templates/Template';
import Head from 'next/head';
import ArticleBody from 'components/ArticleBody/ArticleBody';

export const getStaticPaths = async () => {
  const articles = getListOfArticles();

  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getArticleBySlug(slug);

  return { props: { article } };
};

const Article = ({ article }) => {
  return (
    <Template>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content="Article name" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/prism-themes@1.6.0/themes/prism-vsc-dark-plus.css"
          rel="stylesheet"
        />
      </Head>

      <ArticleBody
        title={article.title}
        date={article.createdAt}
        tags={article.tags}
        description={article.description}
        cover={article.cover}
        content={article.content}
      />
    </Template>
  );
};

export default Article;
