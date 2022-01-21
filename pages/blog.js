import Head from 'next/head';
import Template from 'components/templates/Template';

const Blog = () => {
  return (
    <Template>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Blog</p>
    </Template>
  );
};

export default Blog;
