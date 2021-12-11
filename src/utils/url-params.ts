type PageConfigProps = {
  page: number;
  amount: number;
  category: string;
  bookId?: number | null;
}

export default function makeUrlParams(pageConfig: PageConfigProps, enableBookId?: boolean) {
  const params: any = {
    page: pageConfig.page.toString(),
    amount: pageConfig.amount.toString(),
    category: pageConfig.category,
  }

  if (enableBookId && pageConfig.bookId) {
    params.bookId = pageConfig.bookId.toString()
  }

  return `?${new URLSearchParams(params).toString()}`
}