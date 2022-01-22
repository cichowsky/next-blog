import Nav from 'components/Nav/Nav';
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
