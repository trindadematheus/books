import * as S from './styles'

function Loading() {
  return (
    <>
      <S.Container>
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </S.Container>
    </>
  )
}

export default Loading;