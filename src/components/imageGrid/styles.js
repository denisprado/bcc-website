import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 70%;
  max-width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  margin:0 auto;
`;

export const ContainerItem = styled.div`
  margin: 10px;
  flex-basis: calc(33% - 20px);
  flex-shrink: 0;
`