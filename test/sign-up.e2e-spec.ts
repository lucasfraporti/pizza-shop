import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Lucas Fraporti')
  await page.getByLabel('Seu e-mail').fill('lucasmfraporti@gmail.com')
  await page.getByLabel('Seu celular').fill('99999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso.')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('Wrong Name')
  await page.getByLabel('Seu e-mail').fill('wrong@wrong.com')
  await page.getByLabel('Seu celular').fill('1234567890')

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
