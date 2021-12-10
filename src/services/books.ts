import api from "./api";

type GetBooksProps = {
  page: number;
  amount: number;
  category: string;
}

export async function getBooks(data: GetBooksProps) {
  return await api.get(`/books?${new URLSearchParams(data).toString()}`);
}

export async function getBookFromId(bookId: string) {
  return await api.get(`/books/${bookId}`);
}