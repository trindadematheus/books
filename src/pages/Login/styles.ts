import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('/assets/images/login-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  .container {
    max-width: 1136px;
    margin: 0 auto;
    height: 100%;
    padding: 0px 16px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    form {
      width: 368px;

      .logo {
        margin-bottom: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    background-position: 45%;

    .container {
      form {
        width: 100%;
      }
    }
  }
`