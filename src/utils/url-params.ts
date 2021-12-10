type PageConfigProps = {
  page: number;
  amount: number;
  category: string;
}

export default function makeUrlParams(pageConfig: PageConfigProps) {
  const params = {
    page: pageConfig.page.toString(),
    amount: pageConfig.amount.toString(),
    category: pageConfig.category
  }

  return `?${new URLSearchParams(params).toString()}`
}