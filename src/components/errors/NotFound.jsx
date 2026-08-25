import Link from "next/link"

export default function ErrorNotFound() {
    return (
      <div className="notFound">
        <h1>404 - Side ikke funnet</h1>
        <p>Vi kunne ikke finne denne siden.</p>
        <Link href="/">Gå tilbake til forsiden</Link>
      </div>
    )
  }
  