import { useEffect, useState } from 'react';

import BookCard from '../../components/BookCard';
import Logo from '../../components/Logo';
import RoundedButton from '../../components/RoundedButton';
import { useAuth } from '../../hooks/use-auth';
import { getBooks } from '../../services/books';
import * as S from './styles'

function Home() {
  const [books, setBooks] = useState([])

  const { user, logOut } = useAuth()

  useEffect(() => {
    handleGetBooks()
  }, [])

  async function handleGetBooks() {
    try {
      const { data } = await getBooks({
        amount: 12,
        page: 1,
        category: 'biographies'
      });

      console.log(data)
      setBooks(data.data)
    } catch (error) {
      console.log({ error })
    }
  }

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
          {books.map((book, key) => <BookCard key={key} book={book} />)}
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