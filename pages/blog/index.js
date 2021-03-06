import { getListOfArticles } from 'services/articles';
import Template from 'components/templates/Template';
import GridLayout from 'components/templates/GridLayout';
import Head from 'next/head';
import Card from 'components/Card/Card';

export const getStaticProps = () => {
  const articles = getListOfArticles();

  return { props: { articles } };
};

const Blog = ({ articles }) => {
  return (
    <Template>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Blog</h2>
      <GridLayout>
        {articles.map((article) => (
          <Card
            path={`/blog/${article.slug}`}
            key={article.slug}
            title={article.title}
            description={article.description}
            tags={article.tags}
            cover={article.cover}
            date={article.createdAt}
          />
        ))}
      </GridLayout>
    </Template>
  );
};

export default Blog;
