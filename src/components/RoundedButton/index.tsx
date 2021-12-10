import * as S from './styles'

type RoundedButtonProps = {
  icon: 'logout' | 'chevron-left' | 'chevron-right';
}

function RoundedButton({ icon }: RoundedButtonProps) {
  return (
    <>
      <S.Wrapper className="rounded-button" >
        <img src={`/assets/icons/${icon}.svg`} />
      </S.Wrapper>
    </>
  )
}

export default RoundedButton;