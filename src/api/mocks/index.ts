import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { signInMock } from './sign-in-mocks'

export const worker = setupWorker(signInMock)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return null
  }
  await worker.start()
}
