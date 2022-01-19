import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { signIn } from '../../services/auth';
import * as S from './styles'
import { useAuth } from "../../hooks/use-auth";

const schema = yup.object().shape({
  email: yup.string().email('Informe um E-mail válido.').required('O E-mail é obrigatório.'),
  password: yup.string().min(8).max(32).required('A senha é obrigatória.'),
});

function Login() {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false
  });

  const { saveUser } = useAuth()

  async function handleSignIn(formData: any) {
    setLoading(true)

    try {
      const { data, headers } = await signIn(formData);

      localStorage.setItem('Books:user', JSON.stringify(data))
      localStorage.setItem('Books:token', headers.authorization)
      localStorage.setItem('Books:refresh-token', headers['refresh-token'])

      saveUser(data, headers.authorization)
    } catch (error) {
      console.log({ error })
      setError('password', {
        message: 'Email e/ou senha incorretos.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <S.Wrapper>
        <div className="container">
          <form onSubmit={handleSubmit(handleSignIn)} >
            <Logo />
            <Input
              label="Email"
              register={register('email')}
              error={errors['email']}
            />
            <Input
              label="Senha"
              type="password"
              buttonProps={{
                label: 'Entrar',
                type: 'submit',
                loading: loading
              }}
              register={register('password')}
              error={errors['password']}
            />
          </form>
        </div>
      </S.Wrapper>
    </>
  )
}

export default Login;