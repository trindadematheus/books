import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url('/assets/images/home-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
`

export const Header = styled.header`
  max-width: 1130px;
  margin: 0 auto;
  padding: 42px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-data {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      line-height: 16px;
      color: #333333;
      margin-right: 16px;

      b {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    .user-data {
      span {
        display: none;
      }
    }
  }
`

export const BooksListing = styled.div`
  max-width: 1130px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: 768px) {
    padding: 0px 20px;
    grid-template-columns: 1fr;
  }
`

export const Pagination = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .pagination-label {
    margin-right: 16px;
    font-size: 12px;
    line-height: 20px;
    color: #333333;

    b {
      font-weight: bold;
    }
  }

  .rounded-button+.rounded-button {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    padding-bottom: 16px;

    justify-content: center;
    gap: 16px;

    .pagination-label {
      order: 2;
      margin: 0px;
    }

    .rounded-button:nth-child(2) {
      order: 1;
    }

    .rounded-button:nth-child(3) {
      order: 3;
      margin: 0px;
    }
  }
`