import { InputHTMLAttributes, useRef } from 'react';
import Button from '../Button';

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  buttonText?: string;
}

function Input(props: InputProps) {
  const { label, buttonText } = props;

  const formRef = useRef<any>(null)

  return (
    <S.Wrapper className="input-container" onClick={() => formRef?.current?.focus()} >
      <label className="input-label" >{label}</label>
      <input className="input" ref={formRef} {...props} />
      {buttonText && <Button label={buttonText} />}
    </S.Wrapper>
  )
}

export default Input;