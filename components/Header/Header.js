import Nav from 'components/Nav/Nav';
import Link from 'next/link';
import { SWrapper, SInner, SLogo } from './Header.styles';

const Header = () => {
  return (
    <SWrapper>
      <SInner>
        <Link href="/" passHref>
          <a>
            <SLogo>John Doe</SLogo>
          </a>
        </Link>

        <Nav />
      </SInner>
    </SWrapper>
  );
};

export default Header;
