import styled from 'styled-components';

export const SectionLayout = styled.div`
  margin: 0 0;
  background: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
