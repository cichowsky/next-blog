import styled from 'styled-components';

export const SWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.header.height};
  background-color: ${({ theme }) => theme.header.background};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

export const SInner = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.layout.siteWidth};
  padding: 0 ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SLogo = styled.a`
  font-weight: 700;
  font-size: 1.25rem;
`;
