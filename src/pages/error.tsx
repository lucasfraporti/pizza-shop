// import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Error = () => {
  //   const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, contate nossa equipe de suporte.
      </p>
      {/* <pre>{error?.message || JSON.stringify(error)}</pre> */}
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="cursor-pointer text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
