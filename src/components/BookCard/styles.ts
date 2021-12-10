import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  height: 160px;
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  cursor: pointer;

  display: flex;

  transition: all 400ms;

  :hover {
    transform: translateY(-5px);
  }

  .book-image-area {
    width: 113px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .book-info {
    padding: 19px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .book-title {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #333333;
    }

    .book-author {
      font-size: 12px;
      line-height: 20px;
      color: #AB2680;
    }

    .info {
      font-size: 12px;
      line-height: 20px;
      color: #999999;
    }
  }
`