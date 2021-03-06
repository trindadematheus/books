import { ButtonHTMLAttributes } from 'react';

import Loading from '../Loading';
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label: string;
}

function Button(props: ButtonProps) {
  const { label, loading } = props;

  return (
    <S.Wrapper className="button" {...props}>
      {loading ? <Loading /> : label}
    </S.Wrapper>
  )
}

export default Button;