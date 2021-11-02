import styled from "styled-components";

export const StyledSearchBar = styled.div`
  background-color: hsl(219, 79%, 56%);
  height: clamp(30px, 10%, 10%);
  display: grid;
  place-content: center;
  input[type="text"] {
    padding: clamp(0.1vw, 0.5vw, 10vw);
    margin: 30px;
    font-size: 20px;
    display: flex;
    align-items: flex-start;
  }
`;
