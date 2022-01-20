import styled from 'styled-components';

export const SWrapper = styled.footer`
  background-color: ${({ theme }) => theme.footer.background};
`;

export const SInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.siteWidth};
  padding: ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
`;
