import BookCard from '../../components/BookCard';
import Logo from '../../components/Logo';
import RoundedButton from '../../components/RoundedButton';
import * as S from './styles'

function Home() {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Logo color="#333" />

          <div className="user-data">
            <span>Bem vindo, <b>Guilherme</b></span>
            <RoundedButton icon="logout" />
          </div>
        </S.Header>

        <S.BooksListing>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />

          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />

          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </S.BooksListing>

        <S.Pagination>
          <p className="pagination-label">Página <b>1</b> de <b>100</b></p>
          <RoundedButton icon="chevron-left" />
          <RoundedButton icon="chevron-right" />
        </S.Pagination>
      </S.Wrapper>
    </>
  )
}

export default Home;