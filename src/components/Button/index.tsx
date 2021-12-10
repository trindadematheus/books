import { ButtonHTMLAttributes } from 'react';

import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label: string;
}

function Button(props: ButtonProps) {
  const { label, loading } = props;

  return (
    <S.Wrapper className="button" {...props}>
      {loading ? 'O' : label}
    </S.Wrapper>
  )
}

export default Button;