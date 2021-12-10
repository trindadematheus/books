import BookCard from '../../components/BookCard';
import Logo from '../../components/Logo';
import RoundedButton from '../../components/RoundedButton';
import { useAuth } from '../../hooks/use-auth';
import * as S from './styles'

function Home() {
  const { user, logOut } = useAuth()

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Logo color="#333" />

          <div className="user-data">
            <span>Bem vindo, <b>{user?.name}</b></span>

            <RoundedButton
              icon="logout"
              onClick={logOut}
            />
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