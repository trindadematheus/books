import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import * as S from './styles'

function Login() {
  return (
    <>
      <S.Wrapper>
        <div className="container">
          <form action="">
            <Logo />
            <Input label="Email" />
            <Input
              label="Senha"
              type="password"
              buttonText="Entrar"
            />
          </form>
        </div>
      </S.Wrapper>
    </>
  )
}

export default Login;