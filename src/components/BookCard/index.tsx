import * as S from './styles'

function BookCard() {
  return (
    <>
      <S.Wrapper>
        <div className="book-image-area">
          <img src="/assets/images/book.png" alt="" />
        </div>

        <div className="book-info">
          <div>
            <h2 className="book-title">Crossing the Chasm</h2>
            <span className="book-author">Geoffrey A. Moore</span>
          </div>

          <div>
            <p className="info">150 páginas</p>
            <p className="info">150 páginas</p>
            <p className="info">150 páginas</p>
          </div>
        </div>
      </S.Wrapper>
    </>
  )
}

export default BookCard;