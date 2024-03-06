import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { string, z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ordersFiltersSchema = z.object({
  orderId: string().optional(),
  customerName: string().optional(),
  status: string().optional(),
})

type ordersFiltersSchema = z.infer<typeof ordersFiltersSchema>

export const OrderTableFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } =
    useForm<ordersFiltersSchema>({
      resolver: zodResolver(ordersFiltersSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    })

  function handleFilter({
    orderId,
    customerName,
    status,
  }: ordersFiltersSchema) {
    setSearchParams((state) => {
      if (orderId) {
        state.set('orderId', orderId)
      } else {
        state.delete('orderId')
      }

      if (customerName) {
        state.set('customerName', customerName)
      } else {
        state.delete('customerName')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('page', '1')
      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')
      return state
    })
    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="flex flex-row items-center gap-2 text-sm font-semibold">
        Filtros
        <ArrowRight className="h-2 w-2" />
      </span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[300px]"
        {...register('customerName')}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>

                  <SelectItem value="pending">
                    <div className="flex flex-row items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span>Pendente</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="canceled">
                    <div className="flex flex-row items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                      <span>Cancelado</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="processing">
                    <div className="flex flex-row items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                      <span>Em preparo</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="delivering">
                    <div className="flex flex-row items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                      <span>Em entrega</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="delivered">
                    <div className="flex flex-row items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span>Entregue</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>
          )
        }}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        onClick={handleClearFilters}
        type="button"
        variant="outline"
        size="xs"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
