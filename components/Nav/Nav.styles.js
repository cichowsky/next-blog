import styled from 'styled-components';

export const SNavLink = styled.a`
  padding: 0.5em 0.75em;
  position: relative;
  transition: opacity 0.2s;
  opacity: 0.66;

  &.active,
  &:hover {
    opacity: 1;
  }

  &.active::before {
    content: '';
    position: absolute;
    left: 0.75em;
    bottom: 0;
    height: 2px;
    width: calc(100% - 1.5em);
    background-color: currentColor;
  }
`;
