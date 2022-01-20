import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const SWrapper = styled.div`
  padding-top: ${({ theme }) => theme.header.height};
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: #efefef;
`;

const SContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.siteWidth};
  padding: ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
`;

const Template = ({ children }) => {
  return (
    <SWrapper>
      <Header />
      <SContent>{children}</SContent>
      <Footer />
    </SWrapper>
  );
};

Template.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Template;
