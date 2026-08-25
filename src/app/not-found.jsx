import ErrorNotFound from "@/components/errors/NotFound.jsx"

export const metadata = {
    title: '404 - Naturity',
    description: 'Vi kunne ikke finne denne siden.',
  }
  
  export default function NotFound() {
    return (
      <main>
        <ErrorNotFound />
      </main>
    )
  }
  