import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: transparent;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 32px;
  height: 32px;
  width: 32px;
  padding: 8px;
  cursor: pointer;

  transition: all 400ms;

  :hover {
    opacity: 0.8;
  }
`