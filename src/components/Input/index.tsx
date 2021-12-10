import { InputHTMLAttributes, useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Button, { ButtonProps } from '../Button';
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  buttonProps?: ButtonProps;
  register: UseFormRegisterReturn;
}

function Input(props: InputProps) {
  const { label, buttonProps, register } = props;

  return (
    <S.Wrapper className="input-container" >
      <label className="input-label" >{label}</label>
      <input className="input" {...props} {...register} />
      {buttonProps && <Button {...buttonProps} />}
    </S.Wrapper>
  )
}

export default Input;