import { getAllProjects } from 'services/projects';
import Template from 'components/templates/Template';
import GridLayout from 'components/templates/GridLayout';
import Head from 'next/head';
import Card from 'components/Card/Card';

export const getStaticProps = () => {
  const projects = getAllProjects();

  return { props: { projects } };
};

const Portfolio = ({ projects }) => {
  return (
    <Template>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Portfolio</h2>
      <GridLayout>
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            cover={project.cover}
            date={project.createdAt}
          />
        ))}
      </GridLayout>
    </Template>
  );
};

export default Portfolio;
