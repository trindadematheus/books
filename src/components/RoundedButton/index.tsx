import { ButtonHTMLAttributes } from 'react';

import * as S from './styles'

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'logout' | 'chevron-left' | 'chevron-right';
}

function RoundedButton(props: RoundedButtonProps) {
  const { icon } = props;

  return (
    <>
      <S.Wrapper className="rounded-button" {...props} >
        <img src={`/assets/icons/${icon}.svg`} />
      </S.Wrapper>
    </>
  )
}

export default RoundedButton;