import Head from 'next/head';
import Template from 'components/templates/Template';
import { Button } from 'components/UI/Button';
import { Introduction, ButtonsWrapper } from 'components/Introduction/Introduction.styles';
import Link from 'next/link';

const Home = () => {
  return (
    <Template>
      <Head>
        <title>Main page</title>
        <meta name="description" content="John Doe main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Introduction>
        <h2>Welcome to my blog!</h2>
        <p>
          My name is <strong>John Doe</strong> and I'm here to help You!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <ButtonsWrapper>
          <Link href="/portfolio" passHref>
            <Button as="a">See my works</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button as="a">Go to blog</Button>
          </Link>
        </ButtonsWrapper>
      </Introduction>
    </Template>
  );
};

export default Home;
