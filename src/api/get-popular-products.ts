import { api } from '@/lib/axios'

export type GetPopularProductsResponse = {
  product: string
  amount: number
}[]

export const getPopularProducts = async () => {
  const response = await api.get<GetPopularProductsResponse>(
    '/metrics/popular-products',
  )
  return response.data
}
