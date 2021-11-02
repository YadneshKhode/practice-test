import styled from "styled-components";

export const StyledImage = styled.div`
  width: ${(props) => props.widgetWidth};
  ${({ select }) =>
    select &&
    `
    border: 1px solid black;
  `}
  cursor: pointer;
`;
