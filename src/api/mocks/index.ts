import { setupWorker } from 'msw/browser'

import { env } from '@/env'

export const worker = setupWorker()

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return null
  }
  await worker.start()
}
