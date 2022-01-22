import styled from 'styled-components';
import { SCard } from 'components/Card/Card.styles';
import PropTypes from 'prop-types';

const SGridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  margin-bottom: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;

    ${SCard} {
      flex-direction: row;
    }
  }
`;

const GridLayout = ({ children }) => {
  return <SGridLayout>{children}</SGridLayout>;
};

GridLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default GridLayout;
