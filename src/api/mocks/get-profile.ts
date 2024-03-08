import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Lucas Fraporti',
      email: 'lucasmfraporti@gmail.com',
      phone: '99999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
