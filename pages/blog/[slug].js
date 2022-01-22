import { getListOfArticles, getArticleBySlug } from 'services/articles';
import Template from 'components/templates/Template';
import Head from 'next/head';

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
      </Head>

      <div>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </Template>
  );
};

export default Article;
