import { SWrapper, SInner } from './Footer.styles';

const Footer = () => {
  return (
    <SWrapper>
      <SInner>
        <a href="https://github.com/cichowsky/next-blog" target="_blank" rel="noreferrer">
          &copy; cichowsky - 2022
        </a>
      </SInner>
    </SWrapper>
  );
};

export default Footer;
