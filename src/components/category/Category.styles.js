import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
  grid-auto-rows: 0;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`;

export const Title = styled.h4`
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  display: grid;
  grid-column: 1/-1;
`;
