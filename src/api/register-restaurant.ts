import { api } from '@/lib/axios'

export interface registerRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export const registerRestaurant = async ({
  restaurantName,
  managerName,
  email,
  phone,
}: registerRestaurantBody) => {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
