import { ButtonHTMLAttributes } from 'react';

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label: string;
}

function Button(props: ButtonProps) {
  const { label } = props;

  return (
    <S.Wrapper className="button" {...props}>
      {label}
    </S.Wrapper>
  )
}

export default Button;