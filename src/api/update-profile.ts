import { api } from '@/lib/axios'

interface UpdateProfilebBody {
  name: string
  description: string | null
}

export const updateProfile = async ({
  name,
  description,
}: UpdateProfilebBody) => {
  await api.put('/profile', { name, description })
}
