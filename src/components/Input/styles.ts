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

export const ErrorWrapper = styled.div`
  position: absolute;
  top: 60px;
  z-index: 1;

  .triangle {
    margin-bottom: -3px;
    margin-left: 16px;
  }

  .container {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    padding: 16px;
    height: 48px;
  }

  .label {
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
  }
`