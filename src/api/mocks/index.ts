import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order'
import { cancelOrderMock } from './cancel-order'
import { deliverOrderMock } from './deliver-order'
import { dispatchOrderMock } from './dispatch-order'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getManagedRestaurantMock } from './get-managed-restaurant'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getOrdersMock } from './get-order'
import { getOrderDetailsMock } from './get-order-details'
import { getPopularProductsMock } from './get-popular-products'
import { getProfileMock } from './get-profile'
import { registerRestaurantMock } from './register-restaurant'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  cancelOrderMock,
  approveOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return null
  }
  await worker.start()
}
