import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Book from '../../types/book';
import makeUrlParams from '../../utils/url-params';
import * as S from './styles'

type BookCardProps = {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate()

  const authors = useMemo(() => {
    return book.authors.reduce((acc, item) => {
      if (acc == '') {
        return item;
      }

      acc += `, ${item}`;

      return acc;
    }, '')
  }, [book]);

  function handleSelectBook() {
    const params: any = Object.fromEntries(new URLSearchParams(location.search));

    params.bookId = book.id

    navigate(`/${makeUrlParams(params, true)}`);

  }

  return (
    <>
      <S.Wrapper onClick={handleSelectBook} >
        <div className="book-image-area">
          <img src={book.imageUrl} alt="" />
        </div>

        <div className="book-info">
          <div>
            <h2 className="book-title">{book.title}</h2>
            <span className="book-author">{authors}</span>
          </div>

          <div>
            <p className="info">{book.pageCount} páginas</p>
            <p className="info">Editora {book.publisher}</p>
            <p className="info">Publicado em {book.published}</p>
          </div>
        </div>
      </S.Wrapper>
    </>
  )
}

export default BookCard;