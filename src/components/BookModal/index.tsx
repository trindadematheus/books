import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';

import { getBookFromId } from '../../services/books';
import { BookFromId } from '../../types/book';
import makeUrlParams from '../../utils/url-params';

import * as S from './styles'

function BookModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState<BookFromId | null>(null)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const bookId = params.get('bookId')

    if (bookId) {
      setIsOpen(true)
      handleGetBookFromId(bookId)
    }
  }, [location])

  async function handleGetBookFromId(bookId: string) {
    setLoading(true)

    try {
      const { data } = await getBookFromId(bookId);

      setBook(data)
    } catch (error) {
      console.log({ error })
    } finally {
      setLoading(false)
    }
  }

  function handleCloseModal() {
    const params: any = Object.fromEntries(new URLSearchParams(location.search));
    delete params.bookId;

    navigate(`/${makeUrlParams(params, true)}`);
    setIsOpen(false)
    setBook(null)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {book && (
          <S.Wrapper>
            <img src={book.imageUrl} alt="" />

            <div className="book-desc">
              <div>
                <h1 className="book-title">
                  {book.title}
                </h1>

                <p className="book-authors">{book.authors[0]}</p>
              </div>

              <div>
                <p className="book-info-label">INFORMAÇÕES</p>

                <div className="book-info">
                  <p className="book-info-label">Páginas</p>
                  <p className="book-info-value">{book.pageCount}</p>
                </div>
                <div className="book-info">
                  <p className="book-info-label">Editora</p>
                  <p className="book-info-value">{book.publisher}</p>
                </div>
                <div className="book-info">
                  <p className="book-info-label">Publicação</p>
                  <p className="book-info-value">{book.published}</p>
                </div>
                <div className="book-info">
                  <p className="book-info-label">Idioma</p>
                  <p className="book-info-value">{book.language}</p>
                </div>
                <div className="book-info">
                  <p className="book-info-label">Título Original</p>
                  <p className="book-info-value">{book.title}</p>
                </div>
                <div className="book-info">
                  <p className="book-info-label">ISBN-10</p>
                  <p className="book-info-value">{book.isbn10}</p>
                </div>
                <div className="book-info">
                  <p className="book-info-label">ISBN-13</p>
                  <p className="book-info-value">{book.isbn13}</p>
                </div>
              </div>

              <div className="book-resume-area" >
                <p className="book-info-label">RESENHA DA EDITORA</p>
                <div className="book-resume-scroll">
                  <p className="book-resume-text">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
          </S.Wrapper>
        )}
      </Modal>

      {isOpen && (
        <S.CloseButton onClick={handleCloseModal} >
          <img src={`/assets/icons/close.svg`} />
        </S.CloseButton>
      )}
    </>
  )
}

export default BookModal;