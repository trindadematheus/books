import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import BookCard from '../../components/BookCard';
import Logo from '../../components/Logo';
import RoundedButton from '../../components/RoundedButton';
import { useAuth } from '../../hooks/use-auth';
import { getBooks } from '../../services/books';
import makeUrlParams from '../../utils/url-params';
import * as S from './styles'

function Home() {
  const [books, setBooks] = useState([])
  const [booksInfo, setBooksInfo] = useState({
    page: 1,
    totalPages: 1
  })
  const [pageConfig, setPageConfig] = useState({
    amount: 12,
    page: 1,
    category: 'biographies'
  });

  const { user, logOut } = useAuth()
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    let params = new URLSearchParams(location.search);

    if (params.get('page')) {
      setPageConfig(state => ({
        ...state,
        page: parseInt(params.get("page")!)
      }))
    }
  }, [])

  useEffect(() => {
    handleGetBooks()
  }, [pageConfig])

  async function handleGetBooks() {
    try {
      const { data } = await getBooks(pageConfig);

      setBooks(data.data)
      setBooksInfo({
        page: data.page,
        totalPages: Math.ceil(data.totalPages)
      })

      navigate(`/${makeUrlParams(pageConfig)}`)
    } catch (error) {
      console.log({ error })
    }
  }

  function incrementPage() {
    if (pageConfig.page === booksInfo.totalPages) return;

    setPageConfig(state => ({
      ...state,
      page: state.page + 1,
    }))
  }

  function decrementPage() {
    if (pageConfig.page === 1) return;

    setPageConfig(state => ({
      ...state,
      page: state.page - 1,
    }))
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
          <p className="pagination-label">Página <b>{booksInfo.page}</b> de <b>{booksInfo.totalPages}</b></p>
          <RoundedButton onClick={decrementPage} icon="chevron-left" />
          <RoundedButton onClick={incrementPage} icon="chevron-right" />
        </S.Pagination>
      </S.Wrapper>
    </>
  )
}

export default Home;