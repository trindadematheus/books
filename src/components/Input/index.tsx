import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import Button, { ButtonProps } from '../Button';
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  buttonProps?: ButtonProps;
  register: UseFormRegisterReturn;
  error: FieldError;
}

function Input(props: InputProps) {
  const { label, buttonProps, register, error } = props;

  return (
    <div style={{ position: 'relative' }}  >
      <S.Wrapper className="input-container" >
        <label className="input-label" >{label}</label>
        <input className="input" {...props} {...register} />
        {buttonProps && <Button {...buttonProps} />}
      </S.Wrapper>

      {error && (
        <S.ErrorWrapper>
          <img src="/assets/icons/triangle.svg" alt="" className="triangle" />

          <div className="container">
            <span className="label">{error.message}</span>
          </div>
        </S.ErrorWrapper>
      )}
    </div>
  )
}

export default Input;