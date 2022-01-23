import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.25em 1em;
  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
