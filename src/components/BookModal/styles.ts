import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  img {
    width: 349px;
    height: 512.29px;
    margin-right: 48px;
    filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
  }

  .book-desc {
    max-width: 276px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .book-title {
      font-weight: 500;
      font-size: 28px;
      line-height: 30px;
      color: #333333;
    }

    .book-authors {
      font-size: 12px;
      line-height: 20px;
      color: #AB2680;
    }

    .book-info-label {
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      color: #333333;
    }

    .book-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-value {
        font-size: 12px;
        line-height: 20px;
        color: #999999;
      }
    }

    .book-resume-scroll {
      height: 140px;
      overflow: auto;

      .book-resume-text {
        font-size: 12px;
        line-height: 20px;
        color: #999999;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin: 0px;
      margin-bottom: 32px;
      width: 240px;
      height: 351px;

      align-self: center;
    }

    .book-desc {
      .book-authors {
        margin-bottom: 32px;
      }

      .book-resume-area {
        margin-top: 32px;
      }
    }
  }
`

export const CloseButton = styled.button`
  background-color: white;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  margin: 16px;
  cursor: pointer;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`