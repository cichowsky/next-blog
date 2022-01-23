import styled from 'styled-components';
import Image from 'next/image';

export const SArticle = styled.article`
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

export const SInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const SImage = styled(Image)`
  object-fit: cover;
`;

export const SContent = styled.div`
  margin-top: 1rem;
`;

export const STagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375em;
  margin-bottom: 2rem;
`;
