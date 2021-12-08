import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.32);
  margin-bottom: 16px;
  border-radius: 4px;
  padding: 8px 16px;
  position: relative;

  display: flex;
  flex-direction: column;

  .input-label {
    font-size: 12px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 4px;
  }

  .input {
    background-color: transparent;
    border: none;

    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .button {
    position: absolute;
    right: 12px;
    bottom: 12px;
    top: 12px;
  }
`