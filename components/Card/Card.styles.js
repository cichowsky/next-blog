import styled from 'styled-components';
import Image from 'next/image';

export const SCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
`;

export const SImage = styled(Image)`
  object-fit: cover;
`;

export const SContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SInfo = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const SDate = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`;

export const STagsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.375em;
`;
