import Nav from 'components/organisms/Nav/Nav';
import { SWrapper, SInner } from './Header.styles';

const Header = () => {
  return (
    <SWrapper>
      <SInner>
        {/* LOGO */}
        <Nav />
      </SInner>
    </SWrapper>
  );
};

export default Header;
